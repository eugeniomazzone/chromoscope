import { GoslingSpec } from 'gosling.js/dist/src/gosling-schema';
import tracks from './track';

type SpecOption = {
    title: string;
    subtitle: string;
    width: number;
    cnvUrl: string;
    svUrl: string;
    cnFields: [string, string, string];
};

function getOneOfSmallMultiplesSpec(option: SpecOption): GoslingSpec {
    const { title, subtitle, cnvUrl, svUrl, width, cnFields } = option;
    const screenshotWidth = width; // 1200;
    return {
        // title,
        // subtitle,
        description: subtitle,
        views: [
            {
                static: true,
                layout: 'circular',
                spacing: 1,
                style: { outline: 'lightgray' },
                tracks: [
                    {
                        data: {
                            url: 'https://raw.githubusercontent.com/eugeniomazzone/chromoscope/refs/heads/main/extra-ref/canine_cytoband_for_gistic_order.txt',
                            type: 'csv',
                            chromosomeField: 'Chromosome',
                            genomicFields: ['chromStart', 'chromEnd']
                        },
                        mark: 'rect',
                        color: {
                            field: 'Chromosome',
                            type: 'nominal',
                            domain: [
                                'chr1',
                                'chr2',
                                'chr3',
                                'chr4',
                                'chr5',
                                'chr6',
                                'chr7',
                                'chr8',
                                'chr9',
                                'chr10',
                                'chr11',
                                'chr12',
                                'chr13',
                                'chr14',
                                'chr15',
                                'chr16',
                                'chr17',
                                'chr18',
                                'chr19',
                                'chr20',
                                'chr21',
                                'chr22',
                                'chr23',
                                'chr24',
                                'chr25',
                                'chr26',
                                'chr27',
                                'chr28',
                                'chr29',
                                'chr30',
                                'chr31',
                                'chr32',
                                'chr33',
                                'chr34',
                                'chr35',
                                'chr36',
                                'chr37',
                                'chr38',
                                'chrMT',
                                'chrX'
                            ],
                            range: ['#F6F6F6', 'lightgray']
                        },
                        x: {
                            field: 'chromStart',
                            type: 'genomic',
                            aggregate: 'min',
                            axis: 'none'
                        },
                        xe: { field: 'chromEnd', aggregate: 'max', type: 'genomic' },
                        stroke: { value: 'gray' },
                        strokeWidth: { value: 0.5 },
                        style: { outline: 'black' },
                        width: screenshotWidth,
                        height: 30
                    },
                    tracks.gain(title, cnvUrl, screenshotWidth, 40, 'small', cnFields),
                    tracks.loh(title, cnvUrl, screenshotWidth, 40, 'small', cnFields),
                    tracks.sv(title, svUrl, screenshotWidth, 80, 'small', '')
                ]
            }
        ]
    };
}

export default getOneOfSmallMultiplesSpec;
