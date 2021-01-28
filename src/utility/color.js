const extractRGB = (i) => {
    return {
        r: (i >> 16) & 0xff,
        g: (i >> 8) & 0xff,
        b: i & 0xff,
    };
};

const combineRGB = (r, g, b) => {
    return (r << 16) | (g << 8) | b;
};

export { extractRGB, combineRGB };
