import { ThemeDeep } from 'gosling.js/dist/src/core/utils/theme';

export const consistentSv = {
    DUP: 'Duplication',
    TRA: 'Translocation',
    DEL: 'Deletion',
    t2tINV: 'Inversion (TtT)',
    h2hINV: 'Inversion (HtH)'
};

export const WHOLE_CHROMOSOME_STR = 'Whole Genome';

export const CHROMOSOMES = [
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
];

export const THEME: ThemeDeep = {
    base: 'light',
    root: {
        background: 'white',
        titleAlign: 'middle',
        titleColor: 'black',
        titleFontSize: 18,
        titleFontFamily: 'Arial',
        titleFontWeight: 'normal',
        subtitleAlign: 'middle',
        subtitleColor: 'gray',
        subtitleFontSize: 14,
        subtitleFontWeight: 'normal',
        subtitleFontFamily: 'Arial'
    },
    legend: {
        labelFontFamily: 'Arial'
    },
    axis: {
        labelFontFamily: 'Arial',
        labelFontSize: 14
    }
} as const;
