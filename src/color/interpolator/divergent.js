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

import Divergent from '../preset/divergent';

let interpolateDiverging = function(_name) {
    switch (_name) {
        // Diverging
        case Divergent.BrBG:
            return interpolateBrBG;

        case Divergent.PRGn:
            return interpolatePRGn;

        case Divergent.PiYG:
            return interpolatePiYG;

        case Divergent.PuOr:
            return interpolatePuOr;

        case Divergent.RdBu:
            return interpolateRdBu;

        case Divergent.RdGy:
            return interpolateRdGy;

        case Divergent.RdYlBu:
            return interpolateRdYlBu;

        case Divergent.RdYlGn:
            return interpolateRdYlGn;

        case Divergent.Spectral:
            return interpolateSpectral;

        default:
            return undefined;
    }
}

export default interpolateDiverging;