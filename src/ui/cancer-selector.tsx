import React from 'react';
import './side-menu.css';

const PCAWG_SAMPLES = [
    
];

export default function CancerSelector(props: { onChange: (url: string) => void }) {
    const { onChange } = props;
    // const

    return (
        <div className="menu-container">
            <div className="menu-title">
                Load Complete Study
                {/* <span className="menu-icon">
                    <svg width={16} height={16} viewBox={ICONS.BOX_ARROW_UP_RIGHT.viewBox}>
                        {ICONS.BOX_ARROW_UP_RIGHT.path.map(d => <path fill="currentColor" d={d} />)}
                    </svg>
                </span> */}
            </div>
            <select
                className="dropdown"
                onChange={e => {
                    const selectedValue = e.currentTarget.value;
                    if (selectedValue) {
                        onChange(e.currentTarget.value);
                    }
                }}
                // value={}
            >
                <option key={'Not Selected'} value={null}>
                    Not Selected
                </option>
                {PCAWG_SAMPLES.sort((a, b) => (a.cancer > b.cancer ? 1 : -1)).map(sample => {
                    const str = `${sample.cancer.split('] ')[1]} (${sample.count} samples)`;
                    const configUrl = sample.url.replace('https://chromoscope.bio/app/?showSamples=true&external=', '');
                    return (
                        <option key={str} value={configUrl}>
                            {str}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
