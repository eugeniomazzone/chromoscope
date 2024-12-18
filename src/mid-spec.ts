import { SpecOption } from './main-spec';
import { SingleTrack, View } from 'gosling.js/dist/src/core/gosling.schema';
import tracks from './track';
import { driversToTsvUrl } from './utils';

export default function getMidView(option: SpecOption): View[] {
    const {
        id,
        assembly,
        xDomain,
        vcf,
        vcfIndex,
        vcf2,
        vcf2Index,
        cnv,
        sv,
        width,
        showPutativeDriver,
        showOverview,
        xOffset,
        selectedSvId,
        drivers,
        cnFields
    } = option;
    return [
        {
            linkingId: 'mid-scale',
            xDomain: xDomain ? { interval: xDomain } : { chromosome: 'chr1' },
            layout: 'linear',
            tracks: [
                {
                    title: '  Ideogram',
                    id: `${id}-mid-ideogram`,
                    alignment: 'overlay',
                    data: {
                        url: 'https://raw.githubusercontent.com/eugeniomazzone/chromoscope/refs/heads/main/extra-ref/canine_cytoband_for_gistic_order.txt',
                        type: 'csv',
                        chromosomeField: 'Chromosome',
                        genomicFields: ['chromStart', 'chromEnd']
                    },
                    tracks: [
                        {
                            mark: 'rect',
                            dataTransform: [
                                {
                                    type: 'filter',
                                    field: 'Stain',
                                    oneOf: ['acen'],
                                    not: true
                                }
                            ]
                        },
                        {
                            mark: 'triangleRight',
                            dataTransform: [
                                { type: 'filter', field: 'Stain', oneOf: ['acen'] },
                                { type: 'filter', field: 'Name', include: 'q' }
                            ]
                        },
                        {
                            mark: 'triangleLeft',
                            dataTransform: [
                                { type: 'filter', field: 'Stain', oneOf: ['acen'] },
                                { type: 'filter', field: 'Name', include: 'p' }
                            ]
                        }
                    ],
                    color: {
                        field: 'Stain',
                        type: 'nominal',
                        domain: ['gneg', 'gpos25', 'gpos50', 'gpos75', 'gpos100', 'gvar', 'acen'],
                        range: ['white', 'lightgray', 'gray', 'gray', 'black', '#7B9CC8', '#DC4542']
                    },
                    size: { value: 18 },
                    x: { field: 'chromStart', type: 'genomic' },
                    xe: { field: 'chromEnd', type: 'genomic' },
                    strokeWidth: { value: 0 },
                    width,
                    height: 18
                },
                tracks.driver(id, driversToTsvUrl(drivers), width, 40, 'mid'),
                tracks.boundary('driver', 'mid'),
                //tracks.geneannotation('gene', width, 40, 'mid'),
                {
                    title: '  Gene Annotation',
                    id: `${id}-mid-gene2`,
                    alignment: 'overlay',
                    data: {
                        url: 'https://raw.githubusercontent.com/eugeniomazzone/chromoscope/refs/heads/main/extra-ref/gene-anno',
                        type: 'csv',
                        separator: '\t',
                        chromosomeField: 'chr',
                        genomicFields: ['start', 'end'],
                        valueFields: ['strand', 'gene', 'type','exon_number'],
                    },
                    tracks: [
 /*                        {
                            //size: 20,
                            mark: 'rect', 
                            dataTransform: [
                                { type: 'filter', field: 'type', oneOf: ['exon'] },
                                { type: 'filter', field: 'strand', include: '+' }
                            ],
                            y: 65,
                        }, */
                        {
                            //size: 20,
                            mark: 'rect',
                            dataTransform: [
                                { type: 'filter', field: 'type', oneOf: ['exon'] },
                            ],
                            y: {
                                field: 'strand', 
                                type: 'nominal', 
                                domain: ['-', '+'],  
                                range: [15, 65]
                            },
                        },
                        {
                            // size: 10,
                            mark: 'rect',
                            dataTransform: [
                                { type: 'filter', field: 'type', oneOf: ['intron'] }
                            ],
                            y: {
                                field: 'strand', 
                                type: 'nominal', 
                                domain: ['-', '+'],  
                                range: [15, 65]
                            },
                        },
                        {
                            mark: 'text',
                            text: { field: 'gene', type: 'nominal' },
                            color: { value: 'black' },
                            row: { field: 'row', type: 'nominal' },
                            style: { textFontWeight: 'normal' },
                            dataTransform: [
                                { type: 'filter', field: 'type', oneOf: ['intron'] }
                            ],
                            y: {
                                field: 'strand', 
                                type: 'nominal', 
                                domain: ['-', '+'],  
                                range: [25, 85]
                            },
                            visibility: [
                                {
                                    operation: 'less-than',
                                    measure: 'width',
                                    threshold: '|xe-x|',
                                    transitionPadding: 30,
                                    target: 'mark'
                                },
                            ]
                        }
                    ],
                    color: {
                        field: 'strand',
                        type: 'nominal',
                        domain: ['+', '-'],
                        range: ['red', 'blue']
                    },
                    tooltip: [
                        { field: 'gene', type: 'nominal' },
                        { field: 'strand', type: 'nominal' },
                        { field: 'type', type: 'nominal' },
                        { field: 'exon_number', type: 'nominal' }
                    ],
                    size: {
                        field: 'type',
                        type: 'nominal',
                        domain: ['intron', 'exon'], 
                        range: [10, 20] 
                    },
                    x: { field: 'start', type: 'genomic' },
                    xe: { field: 'end', type: 'genomic' },
                    strokeWidth: { value: 0 },
                    width,
                    height: 70
                },
                ...(!vcf
                    ? []
                    : [tracks.mutation(id, vcf, vcfIndex, width, 60, 'mid'), tracks.boundary('mutation', 'mid')]),
                ...(!vcf2
                    ? []
                    : [tracks.indel(id, vcf2, vcf2Index, width, 40, 'mid'), tracks.boundary('indel', 'mid')]),
                tracks.cnv(id, cnv, width, 60, 'mid', cnFields),
                tracks.boundary('cnv', 'mid'),
                tracks.gain(id, cnv, width, 20, 'mid', cnFields),
                tracks.boundary('gain', 'mid'),
                tracks.loh(id, cnv, width, 20, 'mid', cnFields),
                tracks.boundary('loh', 'mid'),
                tracks.sv(id, sv, width, 250, 'mid', selectedSvId)
            ]
        }
    ];
}
