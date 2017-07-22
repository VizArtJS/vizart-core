import { getColorDistance } from './palette-gen';
import selectColorSpace from './select-colorspace';

const getSubColorSpace = (colors, _selector = (c)=> {return true;}, distanceType = 'Default') => {
    let subspaceSamples = selectColorSpace(_selector);

    let matchings = {};

    for (let c of colors) {
        matchings[c.hex] = [];
    }

    for (let color of subspaceSamples) {
        let lab = color.lab();
        let bestMatch;
        let minDistance = Infinity;

        for (let matchingCandidate of colors) {
            let lab2 = matchingCandidate.lab;

            let distance = getColorDistance(lab, lab2, distanceType);
            if(distance < minDistance){
                minDistance = distance;
                bestMatch = matchingCandidate;
            }
        }

        matchings[bestMatch.hex].push(color.hex());
    }

    return matchings;
}

export default getSubColorSpace;
