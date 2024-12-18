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
        id: 'SRR4037994',
        cancer: 'breast',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/chromoscope/refs/heads/main/sampleData/SRR4037994_SV.tsv',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/chromoscope/refs/heads/main/sampleData/SRR4037994_CNA.tsv',
        drivers:
            'https://raw.githubusercontent.com/eugeniomazzone/chromoscope/refs/heads/main/sampleData/SRR4037994_Driver.tsv',
        vcf: 'https://raw.githubusercontent.com/eugeniomazzone/chromoscope/refs/heads/main/sampleData/SRR4037994_SNP.vcf.gz',
        vcfIndex:
            'https://raw.githubusercontent.com/eugeniomazzone/chromoscope/refs/heads/main/sampleData/SRR4037994_SNP.vcf.gz.tbi',
        cnFields: ['total_cn', 'major_cn', 'minor_cn'],
        note: 'Canine Sample'
    },
    {
        group: 'default',
        id: 'SRR5836925',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836925-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836925-TCN.txt',
        note: 'SRR5836925'
        },
        {
        group: 'default',
        id: 'SRR5836933',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836933-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836933-TCN.txt',
        note: 'SRR5836933'
        },
        {
        group: 'default',
        id: 'SRR5836935',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836935-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836935-TCN.txt',
        note: 'SRR5836935'
        },
        {
        group: 'default',
        id: 'SRR5836939',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836939-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836939-TCN.txt',
        note: 'SRR5836939'
        },
        {
        group: 'default',
        id: 'SRR5836941',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836941-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836941-TCN.txt',
        note: 'SRR5836941'
        },
        {
        group: 'default',
        id: 'SRR5836946',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836946-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836946-TCN.txt',
        note: 'SRR5836946'
        },
        {
        group: 'default',
        id: 'SRR5836948',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836948-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836948-TCN.txt',
        note: 'SRR5836948'
        },
        {
        group: 'default',
        id: 'SRR5836950',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836950-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836950-TCN.txt',
        note: 'SRR5836950'
        },
        {
        group: 'default',
        id: 'SRR5836954',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836954-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836954-TCN.txt',
        note: 'SRR5836954'
        },
        {
        group: 'default',
        id: 'SRR5836968',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836968-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836968-TCN.txt',
        note: 'SRR5836968'
        },
        {
        group: 'default',
        id: 'SRR5836970',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836970-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836970-TCN.txt',
        note: 'SRR5836970'
        },
        {
        group: 'default',
        id: 'SRR5836971',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836971-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836971-TCN.txt',
        note: 'SRR5836971'
        },
        {
        group: 'default',
        id: 'SRR5836975',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836975-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836975-TCN.txt',
        note: 'SRR5836975'
        },
        {
        group: 'default',
        id: 'SRR5836977',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836977-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836977-TCN.txt',
        note: 'SRR5836977'
        },
        {
        group: 'default',
        id: 'SRR5836979',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836979-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836979-TCN.txt',
        note: 'SRR5836979'
        },
        {
        group: 'default',
        id: 'SRR5836982',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836982-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836982-TCN.txt',
        note: 'SRR5836982'
        },
        {
        group: 'default',
        id: 'SRR5836988',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836988-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836988-TCN.txt',
        note: 'SRR5836988'
        },
        {
        group: 'default',
        id: 'SRR5836990',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836990-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836990-TCN.txt',
        note: 'SRR5836990'
        },
        {
        group: 'default',
        id: 'SRR5836992',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836992-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836992-TCN.txt',
        note: 'SRR5836992'
        },
        {
        group: 'default',
        id: 'SRR5836994',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836994-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836994-TCN.txt',
        note: 'SRR5836994'
        },
        {
        group: 'default',
        id: 'SRR5836996',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836996-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5836996-TCN.txt',
        note: 'SRR5836996'
        },
        {
        group: 'default',
        id: 'SRR5837002',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837002-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837002-TCN.txt',
        note: 'SRR5837002'
        },
        {
        group: 'default',
        id: 'SRR5837004',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837004-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837004-TCN.txt',
        note: 'SRR5837004'
        },
        {
        group: 'default',
        id: 'SRR5837006',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837006-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837006-TCN.txt',
        note: 'SRR5837006'
        },
        {
        group: 'default',
        id: 'SRR5837008',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837008-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837008-TCN.txt',
        note: 'SRR5837008'
        },
        {
        group: 'default',
        id: 'SRR5837010',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837010-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837010-TCN.txt',
        note: 'SRR5837010'
        },
        {
        group: 'default',
        id: 'SRR5837012',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837012-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837012-TCN.txt',
        note: 'SRR5837012'
        },
        {
        group: 'default',
        id: 'SRR5837013',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837013-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837013-TCN.txt',
        note: 'SRR5837013'
        },
        {
        group: 'default',
        id: 'SRR5837017',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837017-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837017-TCN.txt',
        note: 'SRR5837017'
        },
        {
        group: 'default',
        id: 'SRR5837019',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837019-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837019-TCN.txt',
        note: 'SRR5837019'
        },
        {
        group: 'default',
        id: 'SRR5837021',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837021-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837021-TCN.txt',
        note: 'SRR5837021'
        },
        {
        group: 'default',
        id: 'SRR5837026',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837026-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837026-TCN.txt',
        note: 'SRR5837026'
        },
        {
        group: 'default',
        id: 'SRR5837028',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837028-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837028-TCN.txt',
        note: 'SRR5837028'
        },
        {
        group: 'default',
        id: 'SRR5837034',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837034-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837034-TCN.txt',
        note: 'SRR5837034'
        },
        {
        group: 'default',
        id: 'SRR5837035',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837035-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837035-TCN.txt',
        note: 'SRR5837035'
        },
        {
        group: 'default',
        id: 'SRR5837037',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837037-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837037-TCN.txt',
        note: 'SRR5837037'
        },
        {
        group: 'default',
        id: 'SRR5837039',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837039-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837039-TCN.txt',
        note: 'SRR5837039'
        },
        {
        group: 'default',
        id: 'SRR5837043',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837043-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837043-TCN.txt',
        note: 'SRR5837043'
        },
        {
        group: 'default',
        id: 'SRR5837046',
        cancer: 'Osteosarcoma',
        assembly: canFam3,
        assemblyName: 'canFam3',
        sv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837046-SV.txt',
        cnv: 'https://raw.githubusercontent.com/eugeniomazzone/study-for-chromoscope/refs/heads/main/StoreSample/SRR5837046-TCN.txt',
        note: 'SRR5837046'
        },
        
    {
        group: 'default',
        id: 'SRR7890905',
        cancer: 'breast',
        assembly: 'hg19',
        vcf: 'https://somatic-browser-test.s3.amazonaws.com/SNV_test_tumor_normal_with_panel.vcf.gz',
        vcfIndex: 'https://somatic-browser-test.s3.amazonaws.com/SNV_test_tumor_normal_with_panel.vcf.gz.tbi',
        vcf2: 'https://somatic-browser-test.s3.amazonaws.com/INDEL_test_tumor_normal_with_panel.vcf.gz',
        vcf2Index: 'https://somatic-browser-test.s3.amazonaws.com/INDEL_test_tumor_normal_with_panel.vcf.gz.tbi',
        sv: 'https://somatic-browser-test.s3.amazonaws.com/SVTYPE_SV_test_tumor_normal_with_panel.bedpe',
        cnv: 'https://gist.githubusercontent.com/sehilyi/6fbceae35756b13472332d6b81b10803/raw/596428a8b0ebc00e7f8cbc52b050db0fbd6e19a5/SRR7890943.ascat.v3.cnv.tsv',
        bam: 'https://somatic-browser-test.s3.amazonaws.com/SRR7890905_GAPFI2USVS21.bam',
        bai: 'https://somatic-browser-test.s3.amazonaws.com/SRR7890905_GAPFI2USVS21.bam.bai',
        note: 'CNV profile - ASCAT. SVs - Sentieon. Mutations and indels - Sentieon',
        thumbnail: SRR7890905
    },
    //    {
    //        group: 'default',
    //        id: 'SRR7890905_Hartwig',
    //        cancer: 'breast',
    //        assembly: 'hg38',
    //        vcf: 'https://somatic-browser-test.s3.amazonaws.com/SNV_test_tumor_normal_with_panel.vcf.gz',
    //        vcfIndex: 'https://somatic-browser-test.s3.amazonaws.com/SNV_test_tumor_normal_with_panel.vcf.gz.tbi',
    //        vcf2: 'https://somatic-browser-test.s3.amazonaws.com/INDEL_test_tumor_normal_with_panel.vcf.gz',
    //        vcf2Index: 'https://somatic-browser-test.s3.amazonaws.com/INDEL_test_tumor_normal_with_panel.vcf.gz.tbi',
    //        sv: 'https://somatic-browser-test.s3.amazonaws.com/SRR7890905/SRR7890905.gripss.filtered.bedpe',
    //        cnv: 'https://somatic-browser-test.s3.amazonaws.com/SRR7890905/SRR7890905.purple.cnv.somatic.reformatted.tsv',
    //        bam: 'https://somatic-browser-test.s3.amazonaws.com/SRR7890905_GAPFI2USVS21.bam',
    //        bai: 'https://somatic-browser-test.s3.amazonaws.com/SRR7890905_GAPFI2USVS21.bam.bai',
    //        note: 'CNV profile - Purple. SVs - Gridss. Mutations and indels - Sentieon',
    //        thumbnail: SRR7890905_Hartwig
    //    },
    //    {
    //        group: 'default',
    //        id: '7a921087-8e62-4a93-a757-fd8cdbe1eb8f',
    //        cancer: 'ovarian',
    //        assembly: 'hg19',
    //        sv: 'https://s3.amazonaws.com/gosling-lang.org/data/SV/7a921087-8e62-4a93-a757-fd8cdbe1eb8f.pcawg_consensus_1.6.161022.somatic.sv.bedpe',
    //        cnv: 'https://s3.amazonaws.com/gosling-lang.org/data/SV/7a921087-8e62-4a93-a757-fd8cdbe1eb8f.consensus.20170119.somatic.cna.annotated.txt',
    //        vcf: 'https://somatic-browser-test.s3.amazonaws.com/browserExamples/7a921087-8e62-4a93-a757-fd8cdbe1eb8f.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz',
    //        vcfIndex:
    //            'https://somatic-browser-test.s3.amazonaws.com/browserExamples/7a921087-8e62-4a93-a757-fd8cdbe1eb8f.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz.tbi',
    //        vcf2: 'https://somatic-browser-test.s3.amazonaws.com/browserExamples/7a921087-8e62-4a93-a757-fd8cdbe1eb8f.consensus.20161006.somatic.indel.sorted.vcf.gz',
    //        vcf2Index:
    //            'https://somatic-browser-test.s3.amazonaws.com/browserExamples/7a921087-8e62-4a93-a757-fd8cdbe1eb8f.consensus.20161006.somatic.indel.sorted.vcf.gz.tbi',
    //        // drivers: 'https://gist.githubusercontent.com/sehilyi/01096d32326da8e7f9acc48dd9790332/raw/4f2bbd96ce3d2b6637bd733674f60e197e4d4da9/json-driver.json', // json example
    //        thumbnail: _7a921087
    //    },
    //    {
    //        group: 'default',
    //        id: '7d332cb1-ba25-47e4-8bf8-d25e14f40d59',
    //        cancer: 'sarcoma',
    //        assembly: 'hg19',
    //        sv: 'https://s3.amazonaws.com/gosling-lang.org/data/SV/7d332cb1-ba25-47e4-8bf8-d25e14f40d59.pcawg_consensus_1.6.161022.somatic.sv.bedpe',
    //        cnv: 'https://s3.amazonaws.com/gosling-lang.org/data/SV/7d332cb1-ba25-47e4-8bf8-d25e14f40d59.consensus.20170119.somatic.cna.annotated.txt',
    //        vcf: 'https://somatic-browser-test.s3.amazonaws.com/browserExamples/7d332cb1-ba25-47e4-8bf8-d25e14f40d59.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz',
    //        vcfIndex:
    //            'https://somatic-browser-test.s3.amazonaws.com/browserExamples/7d332cb1-ba25-47e4-8bf8-d25e14f40d59.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz.tbi',
    //        vcf2: 'https://somatic-browser-test.s3.amazonaws.com/browserExamples/7d332cb1-ba25-47e4-8bf8-d25e14f40d59.consensus.20161006.somatic.indel.sorted.vcf.gz',
    //        vcf2Index:
    //            'https://somatic-browser-test.s3.amazonaws.com/browserExamples/7d332cb1-ba25-47e4-8bf8-d25e14f40d59.consensus.20161006.somatic.indel.sorted.vcf.gz.tbi',
    //        thumbnail: _7d332cb1
    //    },
    //    {
    //        group: 'default',
    //        id: '9ae0744a-9bc1-4cd7-b7cf-c6569ed9e4aa',
    //        cancer: 'kidney',
    //        assembly: 'hg19',
    //        sv: 'https://s3.amazonaws.com/gosling-lang.org/data/SV/9ae0744a-9bc1-4cd7-b7cf-c6569ed9e4aa.pcawg_consensus_1.6.161022.somatic.sv.bedpe',
    //        cnv: 'https://s3.amazonaws.com/gosling-lang.org/data/SV/9ae0744a-9bc1-4cd7-b7cf-c6569ed9e4aa.consensus.20170119.somatic.cna.annotated.txt',
    //        vcf: 'https://somatic-browser-test.s3.amazonaws.com/browserExamples/9ae0744a-9bc1-4cd7-b7cf-c6569ed9e4aa.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz',
    //        vcfIndex:
    //            'https://somatic-browser-test.s3.amazonaws.com/browserExamples/9ae0744a-9bc1-4cd7-b7cf-c6569ed9e4aa.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz.tbi',
    //        vcf2: 'https://somatic-browser-test.s3.amazonaws.com/browserExamples/9ae0744a-9bc1-4cd7-b7cf-c6569ed9e4aa.consensus.20161006.somatic.indel.sorted.vcf.gz',
    //        vcf2Index:
    //            'https://somatic-browser-test.s3.amazonaws.com/browserExamples/9ae0744a-9bc1-4cd7-b7cf-c6569ed9e4aa.consensus.20161006.somatic.indel.sorted.vcf.gz.tbi',
    //        thumbnail: _9ae0744a
    //    },
    //    {
    //        group: 'default',
    //        id: 'b27d75ba-5989-4200-bfe9-f1b7d7cf8008',
    //        cancer: 'breast',
    //        assembly: 'hg19',
    //        sv: 'https://s3.amazonaws.com/gosling-lang.org/data/SV/b27d75ba-5989-4200-bfe9-f1b7d7cf8008.pcawg_consensus_1.6.161022.somatic.sv.bedpe',
    //        cnv: 'https://s3.amazonaws.com/gosling-lang.org/data/SV/b27d75ba-5989-4200-bfe9-f1b7d7cf8008.consensus.20170119.somatic.cna.annotated.txt',
    //        vcf: 'https://somatic-browser-test.s3.amazonaws.com/browserExamples/b27d75ba-5989-4200-bfe9-f1b7d7cf8008.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz',
    //        vcfIndex:
    //            'https://somatic-browser-test.s3.amazonaws.com/browserExamples/b27d75ba-5989-4200-bfe9-f1b7d7cf8008.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz.tbi',
    //        vcf2: 'https://somatic-browser-test.s3.amazonaws.com/browserExamples/b27d75ba-5989-4200-bfe9-f1b7d7cf8008.consensus.20161006.somatic.indel.sorted.vcf.gz',
    //        vcf2Index:
    //            'https://somatic-browser-test.s3.amazonaws.com/browserExamples/b27d75ba-5989-4200-bfe9-f1b7d7cf8008.consensus.20161006.somatic.indel.sorted.vcf.gz.tbi',
    //        thumbnail: _b27d75ba
    //    },
    //    {
    //        group: 'default',
    //        id: 'fc8edf46-2005-1af4-e040-11ac0d481414',
    //        cancer: 'breast',
    //        assembly: 'hg19',
    //        sv: 'https://s3.amazonaws.com/gosling-lang.org/data/SV/fc8edf46-2005-1af4-e040-11ac0d481414.pcawg_consensus_1.6.161022.somatic.sv.bedpe',
    //        cnv: 'https://s3.amazonaws.com/gosling-lang.org/data/SV/fc8edf46-2005-1af4-e040-11ac0d481414.consensus.20170119.somatic.cna.annotated.txt',
    //        vcf: 'https://somatic-browser-test.s3.amazonaws.com/browserExamples/fc8edf46-2005-1af4-e040-11ac0d481414.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz',
    //        vcfIndex:
    //            'https://somatic-browser-test.s3.amazonaws.com/browserExamples/fc8edf46-2005-1af4-e040-11ac0d481414.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz.tbi',
    //        vcf2: 'https://somatic-browser-test.s3.amazonaws.com/browserExamples/fc8edf46-2005-1af4-e040-11ac0d481414.consensus.20161006.somatic.indel.sorted.vcf.gz',
    //        vcf2Index:
    //            'https://somatic-browser-test.s3.amazonaws.com/browserExamples/fc8edf46-2005-1af4-e040-11ac0d481414.consensus.20161006.somatic.indel.sorted.vcf.gz.tbi',
    //        thumbnail: _fc8edf46
    //    },
    //    // {
    //    //     group: 'default',
    //    //     id: 'SRR7890905',
    //    //     cancer: 'breast',
    //    //     assembly: 'hg38',
    //    //     sv: 'https://somatic-browser-test.s3.amazonaws.com/SVTYPE_SV_test_tumor_normal_with_panel.bedpe',
    //    //     cnv: 'https://gist.githubusercontent.com/sehilyi/6fbceae35756b13472332d6b81b10803/raw/596428a8b0ebc00e7f8cbc52b050db0fbd6e19a5/SRR7890943.ascat.v3.cnv.tsv',
    //    //     bam: 'https://somatic-browser-test.s3.amazonaws.com/SRR7890905_GAPFI2USVS21.bam',
    //    //     bai: 'https://somatic-browser-test.s3.amazonaws.com/SRR7890905_GAPFI2USVS21.bam.bai',
    //    //     thumbnail: _SRR7890905
    //    // },
    //    {
    //        group: 'default',
    //        id: 'bc0dee07-de20-44d6-be65-05af7e63ac96', // GACA-CN-
    //        cancer: 'gastric',
    //        assembly: 'hg19',
    //        sv: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/bc0dee07-de20-44d6-be65-05af7e63ac96.pcawg_consensus_1.6.161116.somatic.sv.bedpe',
    //        cnv: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/bc0dee07-de20-44d6-be65-05af7e63ac96.consensus.20170119.somatic.cna.txt',
    //        vcf: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/bc0dee07-de20-44d6-be65-05af7e63ac96.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz',
    //        vcfIndex:
    //            'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/bc0dee07-de20-44d6-be65-05af7e63ac96.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz.tbi',
    //        vcf2: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/bc0dee07-de20-44d6-be65-05af7e63ac96.consensus.20161006.somatic.indel.sorted.vcf.gz',
    //        vcf2Index:
    //            'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/bc0dee07-de20-44d6-be65-05af7e63ac96.consensus.20161006.somatic.indel.sorted.vcf.gz.tbi',
    //        thumbnail: _bc0dee07
    //    },
    //    {
    //        group: 'default',
    //        id: 'f1504811-8363-41e6-b43c-62452b1262d3', // OV-AU-
    //        cancer: 'ovarian',
    //        assembly: 'hg19',
    //        sv: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/f1504811-8363-41e6-b43c-62452b1262d3.pcawg_consensus_1.6.161116.somatic.sv.bedpe',
    //        cnv: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/f1504811-8363-41e6-b43c-62452b1262d3.consensus.20170119.somatic.cna.txt',
    //        vcf: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/f1504811-8363-41e6-b43c-62452b1262d3.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz',
    //        vcfIndex:
    //            'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/f1504811-8363-41e6-b43c-62452b1262d3.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz.tbi',
    //        vcf2: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/f1504811-8363-41e6-b43c-62452b1262d3.consensus.20161006.somatic.indel.sorted.vcf.gz',
    //        vcf2Index:
    //            'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/f1504811-8363-41e6-b43c-62452b1262d3.consensus.20161006.somatic.indel.sorted.vcf.gz.tbi',
    //        thumbnail: _f1504811
    //    },
    //    {
    //        group: 'default',
    //        id: '89dad92e-5b3f-479a-a6da-a94ee7df7f8a', // OV-AU-
    //        cancer: 'ovarian',
    //        assembly: 'hg19',
    //        sv: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/89dad92e-5b3f-479a-a6da-a94ee7df7f8a.pcawg_consensus_1.6.161116.somatic.sv.bedpe',
    //        cnv: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/89dad92e-5b3f-479a-a6da-a94ee7df7f8a.consensus.20170119.somatic.cna.txt',
    //        vcf: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/89dad92e-5b3f-479a-a6da-a94ee7df7f8a.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz',
    //        vcfIndex:
    //            'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/89dad92e-5b3f-479a-a6da-a94ee7df7f8a.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz.tbi',
    //        vcf2: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/89dad92e-5b3f-479a-a6da-a94ee7df7f8a.consensus.20161006.somatic.indel.sorted.vcf.gz',
    //        vcf2Index:
    //            'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/89dad92e-5b3f-479a-a6da-a94ee7df7f8a.consensus.20161006.somatic.indel.sorted.vcf.gz.tbi',
    //        thumbnail: _89dad92e
    //    },
    //    {
    //        group: 'default',
    //        id: 'b243adb4-b3e7-4e0e-bc0d-625aa8dbb1be', // OV-US-
    //        cancer: 'ovarian serous cystadenocarcinoma',
    //        assembly: 'hg19',
    //        sv: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/b243adb4-b3e7-4e0e-bc0d-625aa8dbb1be.pcawg_consensus_1.6.161116.somatic.sv.bedpe',
    //        cnv: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/b243adb4-b3e7-4e0e-bc0d-625aa8dbb1be.consensus.20170119.somatic.cna.txt',
    //        vcf: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/b243adb4-b3e7-4e0e-bc0d-625aa8dbb1be.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz',
    //        vcfIndex:
    //            'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/b243adb4-b3e7-4e0e-bc0d-625aa8dbb1be.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz.tbi',
    //        vcf2: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/b243adb4-b3e7-4e0e-bc0d-625aa8dbb1be.consensus.20161006.somatic.indel.sorted.vcf.gz',
    //        vcf2Index:
    //            'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/b243adb4-b3e7-4e0e-bc0d-625aa8dbb1be.consensus.20161006.somatic.indel.sorted.vcf.gz.tbi',
    //        thumbnail: _b243adb4
    //    },
    //    {
    //        group: 'default',
    //        id: '84ca6ab0-9edc-4636-9d27-55cdba334d7d',
    //        cancer: 'ovarian',
    //        assembly: 'hg19',
    //        sv: 'https://s3.amazonaws.com/gosling-lang.org/data/SV/84ca6ab0-9edc-4636-9d27-55cdba334d7d.pcawg_consensus_1.6.161022.somatic.sv.bedpe',
    //        cnv: 'https://s3.amazonaws.com/gosling-lang.org/data/SV/84ca6ab0-9edc-4636-9d27-55cdba334d7d.consensus.20170119.somatic.cna.annotated.txt',
    //        vcf: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/84ca6ab0-9edc-4636-9d27-55cdba334d7d.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz',
    //        vcfIndex:
    //            'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/84ca6ab0-9edc-4636-9d27-55cdba334d7d.consensus.20160830.somatic.snv_mnv.sorted.vcf.gz.tbi',
    //        vcf2: 'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/84ca6ab0-9edc-4636-9d27-55cdba334d7d.consensus.20161006.somatic.indel.sorted.vcf.gz',
    //        vcf2Index:
    //            'https://somatic-browser-test.s3.amazonaws.com/cdk12cancers/84ca6ab0-9edc-4636-9d27-55cdba334d7d.consensus.20161006.somatic.indel.sorted.vcf.gz.tbi',
    //        thumbnail: _84ca6ab0
    //    },
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
        thumbnail: _0bfd1043
    }
];

export default samples;
