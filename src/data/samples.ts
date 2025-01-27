import { Assembly } from 'gosling.js/dist/src/gosling-schema';

export type SampleType = {
    group: 'default' | 'doga' | 'vcf';
    id: string; // "aliquot ID"
    cancer: string; // cancer type
    assembly: Assembly; // hg19 or 38
    assemblyName?: string;
    sv: string; // URL of bedpe
    cnv?: string; // URL of txt
    drivers?: { [k: string]: string | number }[] | string;
    bam?: string;
    bai?: string;
    vcf?: string;
    vcfIndex?: string;
    vcf2?: string;
    vcf2Index?: string;
    cnFields?: [string, string, string];
    thumbnail?: string;
    note?: string;
};

// const samples: SampleType[] = (pcawg as SampleType[]).map(d => { return { group: 'default', ...d }});
// console.log(samples);
const canFam3: Assembly = [
    ['chr1', 122678785],
    ['chr2', 85426708],
    ['chr3', 91889043],
    ['chr4', 88276631],
    ['chr5', 88915250],
    ['chr6', 77573801],
    ['chr7', 80974532],
    ['chr8', 74330416],
    ['chr9', 61074082],
    ['chr10', 69331447],
    ['chr11', 74389097],
    ['chr12', 72498081],
    ['chr13', 63241923],
    ['chr14', 60966679],
    ['chr15', 64190966],
    ['chr16', 59632846],
    ['chr17', 64289059],
    ['chr18', 55844845],
    ['chr19', 53741614],
    ['chr20', 58134056],
    ['chr21', 50858623],
    ['chr22', 61439934],
    ['chr23', 52294480],
    ['chr24', 47698779],
    ['chr25', 51628933],
    ['chr26', 38964690],
    ['chr27', 45876710],
    ['chr28', 41182112],
    ['chr29', 41845238],
    ['chr30', 40214260],
    ['chr31', 39895921],
    ['chr32', 38810281],
    ['chr33', 31377067],
    ['chr34', 42124431],
    ['chr35', 26524999],
    ['chr36', 30810995],
    ['chr37', 30902991],
    ['chr38', 23914537],
    ['chrMT', 16727],
    ['chrX', 123869142]
];
const samples: SampleType[] = [
    {
        group: 'default',
        id: '0bfd1043-816e-e3e4-e050-11ac0c4860c5', // OV-US-
        cancer: 'prostate adenocarcinoma',
        assembly: 'hg19',
        sv: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/0bfd1043-816e-e3e4-e050-11ac0c4860c5.pcawg_consensus_1.6.161116.somatic.sv.bedpe',
        cnv: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/0bfd1043-816e-e3e4-e050-11ac0c4860c5.consensus.20170119.somatic.cna.txt',
        vcf: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/0bfd1043-816e-e3e4-e050-11ac0c4860c5.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz',
        vcfIndex:
            'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/0bfd1043-816e-e3e4-e050-11ac0c4860c5.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz.tbi',
        vcf2: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/0bfd1043-816e-e3e4-e050-11ac0c4860c5.consensus.20161006.somatic.indel.sorted.vcf.gz',
        vcf2Index:
            'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/0bfd1043-816e-e3e4-e050-11ac0c4860c5.consensus.20161006.somatic.indel.sorted.vcf.gz.tbi'
    }
];

export default samples;
