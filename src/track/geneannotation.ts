import { SingleTrack } from 'gosling.js/dist/src/gosling-schema';
import { TrackMode } from './index';

export default function geneannotation(sampleId: string, width: number, height: number, mode: TrackMode): SingleTrack {
    return {
        id: `${sampleId}-${mode}-gene`,
        title: mode === 'small' ? '' : '  Gene',
        style: { background: '#F6F6F6' },
        data: {
            separator: '\t',
            url: 'https://raw.githubusercontent.com/eugeniomazzone/chromoscope/refs/heads/main/extra-ref/exon-anno',
            type: 'csv',
            chromosomeField: 'chr',
            genomicFields: ['start', 'end']
        },
        tooltip: [
            { field: 'gene', type: 'nominal' },
            { field: 'strand', type: 'nominal' }
        ],
        mark: 'rect',
        x: { field: 'start', type: 'genomic' },
        xe: { field: 'end', type: 'genomic' },
        color: { value: '#5CB6EA' },
        width,
        height
        /*         {
        dataTransform: [
            {type: "filter", field: "strand", oneOf: ["+"]}
        ],
        mark: "rect",
        x: {field: "end", type: "genomic"},
        size: {value: 7}
        },
        {
        dataTransform: [
            {type: "filter", field: "strand", oneOf: ["-"]}
        ],
        mark: "rect",
        x: {field: 'start', 
            type: 'genomic'},
        size: {value: 7}
        }, */
    };
}
/* {
    id: `${id}-mid-gene`,
    title: '  Gene Annotation',
    template: 'gene',
    data: {
        url: 'https://raw.githubusercontent.com/eugeniomazzone/chromoscope/refs/heads/main/extra-ref/exon-anno',
        type: 'csv',
        separator: '\t',
        chromosomeField: 'chr',
        genomicFields: ['start', 'end'],
        valueFields: ['strand', 'gene'],
        exonIntervalFields: ['start', 'end']
    },
    encoding: {
        startPosition: { field: 'start' },
        endPosition: { field: 'end' },
        strandColor: { field: 'strand', range: ['gray'] },
        strandRow: { field: 'strand' },
        opacity: { value: 0.4 },
        geneHeight: { value: 60 / 3.0 },
        geneLabel: { field: 'name' },
        geneLabelFontSize: { value: 60 / 3.0 },
        geneLabelColor: { field: 'strand', range: ['black'] },
        geneLabelStroke: { value: 'white' },
        geneLabelStrokeThickness: { value: 4 },
        geneLabelOpacity: { value: 1 },
        type: { field: 'type' }
    },
    tooltip: [
        { field: 'gene', type: 'nominal' },
        { field: 'strand', type: 'nominal' }
    ],
    width,
    height: 60
}, */
