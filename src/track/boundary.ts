import { SingleTrack } from 'gosling.js/dist/src/gosling-schema';
import { TrackMode } from '.';

const hex = 'lightgray';

export default function boundary(parent: string, mode: TrackMode): Partial<SingleTrack> {
    return {
        id: `${parent}-${mode}-boundary`,
        data: {
            type: 'json',
            chromosomeField: 'c',
            genomicFields: ['p'],
            values: [
                { c: 'chr2', p: 0 },
                { c: 'chr3', p: 0 },
                { c: 'chr4', p: 0 },
                { c: 'chr5', p: 0 },
                { c: 'chr6', p: 0 },
                { c: 'chr7', p: 0 },
                { c: 'chr8', p: 0 },
                { c: 'chr9', p: 0 },
                { c: 'chr10', p: 0 },
                { c: 'chr11', p: 0 },
                { c: 'chr12', p: 0 },
                { c: 'chr13', p: 0 },
                { c: 'chr14', p: 0 },
                { c: 'chr15', p: 0 },
                { c: 'chr16', p: 0 },
                { c: 'chr17', p: 0 },
                { c: 'chr18', p: 0 },
                { c: 'chr19', p: 0 },
                { c: 'chr20', p: 0 },
                { c: 'chr21', p: 0 },
                { c: 'chr22', p: 0 },
                { c: 'chr23', p: 0 },
                { c: 'chr24', p: 0 },
                { c: 'chr25', p: 0 },
                { c: 'chr26', p: 0 },
                { c: 'chr27', p: 0 },
                { c: 'chr28', p: 0 },
                { c: 'chr29', p: 0 },
                { c: 'chr30', p: 0 },
                { c: 'chr31', p: 0 },
                { c: 'chr32', p: 0 },
                { c: 'chr33', p: 0 },
                { c: 'chr34', p: 0 },
                { c: 'chr35', p: 0 },
                { c: 'chr36', p: 0 },
                { c: 'chr37', p: 0 },
                { c: 'chr38', p: 0 },
                { c: 'chrMT', p: 0 },
                { c: 'chrX', p: 0 }
            ]
        },
        mark: mode === 'mid' ? 'rule' : 'rect',
        x: { field: 'p', type: 'genomic' },
        color: { value: hex },
        opacity: { value: 0.5 },
        overlayOnPreviousTrack: true
    };
}
