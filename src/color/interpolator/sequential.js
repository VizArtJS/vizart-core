import {
    interpolateBuGn,
    interpolateBuPu,
    interpolateGnBu,
    interpolateOrRd,
    interpolatePuBuGn,
    interpolatePuBu,
    interpolatePuRd,
    interpolateRdPu,
    interpolateYlGnBu,
    interpolateYlGn,
    interpolateYlOrBr,
    interpolateYlOrRd,
    interpolateBlues,
    interpolateGreens,
    interpolateGreys,
    interpolatePurples,
    interpolateReds,
    interpolateOranges
} from "d3-scale-chromatic";

import {
    interpolateViridis,
    interpolateInferno,
    interpolateMagma,
    interpolatePlasma,
    interpolateWarm,
    interpolateCool,
    interpolateRainbow,
    interpolateCubehelixDefault,
} from 'd3-scale';

// Sequential (Single Hue)
const Blues = 'Blues';
const Greens = 'Greens';
const Greys = 'Greys';
const Oranges = 'Oranges';
const Purples = 'Purples';
const Reds = 'Reds';


// Sequential (Multi-Hue)
const BuGn = 'BuGn';
const BuPu = 'BuPu';
const GnBu = 'GnBu';
const OrRd = 'OrRd';
const PuBuGn = 'PuBuGn';
const PuBu = 'PuBu';
const PuRd = 'PuRd';
const RdPu = 'RdPu';
const YlGnBu = 'YlGnBu';
const YlGn = 'YlGn';
const YlOrBr = 'YlOrBr';
const YlOrRd = 'YlOrRd';

const Viridis = 'Viridis';
const Inferno = 'Inferno';
const Magma = 'Magma';
const Plasma = 'Plasma';
const Warm = 'Warm';
const Cool = 'Cool';
const Rainbow = 'Rainbow';
const Cubehelix = 'Cubehelix';

let interpolateSequential = function(_name) {
    switch(_name) {


        // sequential single hue
        case Blues:
            return interpolateBlues;

        case Greens:
            return interpolateGreens;

        case Greys:
            return interpolateGreys;

        case Oranges:
            return interpolateOranges;

        case Reds:
            return interpolateReds;

        case Purples:
            return interpolatePurples;

        // Sequential (Multi-Hue)
        case BuGn:
            return interpolateBuGn;

        case BuPu:
            return interpolateBuPu;

        case GnBu:
            return interpolateGnBu;

        case OrRd:
            return interpolateOrRd;

        case PuBuGn:
            return interpolatePuBuGn;

        case PuBu:
            return interpolatePuBu;

        case PuRd:
            return interpolatePuRd;

        case RdPu:
            return interpolateRdPu;

        case YlGnBu:
            return interpolateYlGnBu;

        case YlGn:
            return interpolateYlGn;

        case YlOrBr:
            return interpolateYlOrBr;

        case YlOrRd:
            return interpolateYlOrRd;

        // R Color
        case Viridis:
            return interpolateViridis;

        case Inferno:
            return interpolateInferno;

        case Magma:
            return interpolateMagma;

        case Plasma:
            return interpolatePlasma;

        case Warm:
            return interpolateWarm;

        case Cool:
            return interpolateCool;

        case Rainbow:
            return interpolateRainbow;

        case Cubehelix:
            return interpolateCubehelixDefault;

        default:
            return undefined;
    }
}

export default interpolateSequential;