import {
    interpolateBrBG,
    interpolatePRGn,
    interpolatePiYG,
    interpolatePuOr,
    interpolateRdBu,
    interpolateRdGy,
    interpolateRdYlBu,
    interpolateRdYlGn,
    interpolateSpectral,
} from 'd3-scale-chromatic';

// Diverging
const BrBG = 'BrBG';
const PRGn = 'PRGn';
const PiYG = 'PiYG';
const PuOr = 'PuOr';
const RdBu = 'RdBu';
const RdGy = 'RdGy';
const RdYlBu = 'RdYlBu';
const RdYlGn = 'RdYlGn';
const Spectral = 'Spectral';

let interpolateDiverging = function(_name) {
    switch (_name) {
        // Diverging
        case BrBG:
            return interpolateBrBG;

        case PRGn:
            return interpolatePRGn;

        case PiYG:
            return interpolatePiYG;

        case PuOr:
            return interpolatePuOr;

        case RdBu:
            return interpolateRdBu;

        case RdGy:
            return interpolateRdGy;

        case RdYlBu:
            return interpolateRdYlBu;

        case RdYlGn:
            return interpolateRdYlGn;

        case Spectral:
            return interpolateSpectral;

        default:
            return undefined;
    }
}

export default interpolateDiverging;