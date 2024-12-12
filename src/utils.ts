export const CHROM_SIZE_HG38 = {
    chr1: 248956422,
    chr2: 242193529,
    chr3: 198295559,
    chr4: 190214555,
    chr5: 181538259,
    chr6: 170805979,
    chr7: 159345973,
    chr8: 145138636,
    chr9: 138394717,
    chr10: 133797422,
    chr11: 135086622,
    chr12: 133275309,
    chr13: 114364328,
    chr14: 107043718,
    chr15: 101991189,
    chr16: 90338345,
    chr17: 83257441,
    chr18: 80373285,
    chr19: 58617616,
    chr20: 64444167,
    chr21: 46709983,
    chr22: 50818468,
    chrX: 156040895,
    chrY: 57227415
};

export const CHROM_SIZE_HG19 = {
    chr1: 249250621,
    chr2: 243199373,
    chr3: 198022430,
    chr4: 191154276,
    chr5: 180915260,
    chr6: 171115067,
    chr7: 159138663,
    chr8: 146364022,
    chr9: 141213431,
    chr10: 135534747,
    chr11: 135006516,
    chr12: 133851895,
    chr13: 115169878,
    chr14: 107349540,
    chr15: 102531392,
    chr16: 90354753,
    chr17: 81195210,
    chr18: 78077248,
    chr19: 59128983,
    chr20: 63025520,
    chr21: 48129895,
    chr22: 51304566,
    chrX: 155270560,
    chrY: 59373566,
    chrM: 16571
};

export const CHROM_SIZE_CF3 = {
    chr1: 122678785,
    chr2: 85426708,
    chr3: 91889043,
    chr4: 88276631,
    chr5: 88915250,
    chr6: 77573801,
    chr7: 80974532,
    chr8: 74330416,
    chr9: 61074082,
    chr10: 69331447,
    chr11: 74389097,
    chr12: 72498081,
    chr13: 63241923,
    chr14: 60966679,
    chr15: 64190966,
    chr16: 59632846,
    chr17: 64289059,
    chr18: 55844845,
    chr19: 53741614,
    chr20: 58134056,
    chr21: 50858623,
    chr22: 61439934,
    chr23: 52294480,
    chr24: 47698779,
    chr25: 51628933,
    chr26: 38964690,
    chr27: 45876710,
    chr28: 41182112,
    chr29: 41845238,
    chr30: 40214260,
    chr31: 39895921,
    chr32: 38810281,
    chr33: 31377067,
    chr34: 42124431,
    chr35: 26524999,
    chr36: 30810995,
    chr37: 30902991,
    chr38: 23914537,
    chrMT: 16727,
    chrX: 123869142
};
function getChromInterval(chromSize: { [k: string]: number }) {
    const interval: { [k: string]: [number, number] } = {};

    Object.keys(chromSize).reduce((sum, k) => {
        interval[k] = [sum, sum + chromSize[k]];
        return sum + chromSize[k];
    }, 0);

    return interval;
}

export function getRelativeGenomicPosition(absPos: number) {
    const [chromosome, absInterval] = Object.entries(getChromInterval(CHROM_SIZE_CF3)).find(d => {
        const [start, end] = d[1];
        return start <= absPos && absPos < end;
    }) ?? [null, null];

    if (!chromosome || !absInterval) {
        // The number is out of range
        return { chromosome: 'unknown', position: absPos };
    }

    return { chromosome, position: absPos - absInterval[0] };
}

export function isChrome() {
    return window.navigator.userAgent.toLowerCase().indexOf('chrome') !== -1;
}

export function driversToTsvUrl(drivers: string | { [k: string]: string | number }[]) {
    if (typeof drivers === 'string') return drivers;

    const keys = [];
    drivers.forEach(d => keys.push(...Object.keys(d)));
    const uniqueKeys = Array.from(new Set(keys));
    const text = [uniqueKeys.join('\t'), ...drivers.map(d => uniqueKeys.map(k => d[k]).join('\t'))].join('\n');
    const tsv = new Blob([text], { type: 'text/tsv' });
    const url = URL.createObjectURL(tsv);
    return url;
}
