import { Assembly } from 'gosling.js/dist/src/gosling-schema';
import _7a921087 from '../script/img/7a921087-8e62-4a93-a757-fd8cdbe1eb8f.jpeg';
import _84ca6ab0 from '../script/img/84ca6ab0-9edc-4636-9d27-55cdba334d7d.jpeg';
import _7d332cb1 from '../script/img/7d332cb1-ba25-47e4-8bf8-d25e14f40d59.jpeg';
import _9ae0744a from '../script/img/9ae0744a-9bc1-4cd7-b7cf-c6569ed9e4aa.jpeg';
import _b27d75ba from '../script/img/b27d75ba-5989-4200-bfe9-f1b7d7cf8008.jpeg';
import _fc8edf46 from '../script/img/fc8edf46-2005-1af4-e040-11ac0d481414.jpeg';
import SRR7890905 from '../script/img/SRR7890905.jpg';
import SRR7890905_Hartwig from '../script/img/SRR7890905_Hartwig.jpg';
import _bc0dee07 from '../script/img/GACA-CN-bc0dee07-de20-44d6-be65-05af7e63ac96.jpeg';
import _f1504811 from '../script/img/OV-AU-f1504811-8363-41e6-b43c-62452b1262d3.jpeg';
import _89dad92e from '../script/img/OV-AU-89dad92e-5b3f-479a-a6da-a94ee7df7f8a.jpeg';
import _b243adb4 from '../script/img/OV-US-b243adb4-b3e7-4e0e-bc0d-625aa8dbb1be.jpeg';
import _84ca6ab0_OV from '../script/img/OV-US-84ca6ab0-9edc-4636-9d27-55cdba334d7d.jpeg';
import _0bfd1043 from '../script/img/OV-US-0bfd1043-816e-e3e4-e050-11ac0c4860c5.jpeg';

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
const canFam3: Assembly = [['chr1', 122678785],['chr2', 85426708],['chr3', 91889043],['chr4', 88276631],['chr5', 88915250],['chr6', 77573801],['chr7', 80974532],['chr8', 74330416],['chr9', 61074082],['chr10', 69331447],['chr11', 74389097],['chr12', 72498081],['chr13', 63241923],['chr14', 60966679],['chr15', 64190966],['chr16', 59632846],['chr17', 64289059],['chr18', 55844845],['chr19', 53741614],['chr20', 58134056],['chr21', 50858623],['chr22', 61439934],['chr23', 52294480],['chr24', 47698779],['chr25', 51628933],['chr26', 38964690],['chr27', 45876710],['chr28', 41182112],['chr29', 41845238],['chr30', 40214260],['chr31', 39895921],['chr32', 38810281],['chr33', 31377067],['chr34', 42124431],['chr35', 26524999],['chr36', 30810995],['chr37', 30902991],['chr38', 23914537],['chrMT', 16727],['chrX', 123869142]];
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
            'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/0bfd1043-816e-e3e4-e050-11ac0c4860c5.consensus.20161006.somatic.indel.sorted.vcf.gz.tbi',
    }
];

export default samples;
