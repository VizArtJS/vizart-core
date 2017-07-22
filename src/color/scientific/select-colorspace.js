import sampleColorSpace from './sample-colorspace';

const selectColorSpace = (_selector) => {
    // Sample the color space (for monitoring)
    let subspaceSamples = [];
    const colorSamples = sampleColorSpace();

    for (let c of colorSamples) {
        if (_selector(c) ) {
            subspaceSamples.push(c.color);
        }
    }

    return subspaceSamples;
};

export default selectColorSpace;