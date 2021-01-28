import React from 'react';
import { extractRGB } from '../../utility/color';

const EmbedColorPill = ({ color }) => {
    let computed;

    if (color) {
        const c = extractRGB(color);
        computed = `rgba(${c.r},${c.g},${c.b},1)`;
    }

    const style = { backgroundColor: computed !== undefined ? computed : '' };
    return <div className="embed-color-pill" style={style} />;
};

export default EmbedColorPill;
