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

import Sequential from '../preset/sequential';


let interpolateSequential = function(_name) {
    switch(_name) {

        // sequential single hue
        case Sequential.Blues:
            return interpolateBlues;

        case Sequential.Greens:
            return interpolateGreens;

        case Sequential.Greys:
            return interpolateGreys;

        case Sequential.Oranges:
            return interpolateOranges;

        case Sequential.Reds:
            return interpolateReds;

        case Sequential.Purples:
            return interpolatePurples;

        // Sequential (Multi-Hue)
        case Sequential.BuGn:
            return interpolateBuGn;

        case Sequential.BuPu:
            return interpolateBuPu;

        case Sequential.GnBu:
            return interpolateGnBu;

        case Sequential.OrRd:
            return interpolateOrRd;

        case Sequential.PuBuGn:
            return interpolatePuBuGn;

        case Sequential.PuBu:
            return interpolatePuBu;

        case Sequential.PuRd:
            return interpolatePuRd;

        case Sequential.RdPu:
            return interpolateRdPu;

        case Sequential.YlGnBu:
            return interpolateYlGnBu;

        case Sequential.YlGn:
            return interpolateYlGn;

        case Sequential.YlOrBr:
            return interpolateYlOrBr;

        case Sequential.YlOrRd:
            return interpolateYlOrRd;

        // R Color
        case Sequential.Viridis:
            return interpolateViridis;

        case Sequential.Inferno:
            return interpolateInferno;

        case Sequential.Magma:
            return interpolateMagma;

        case Sequential.Plasma:
            return interpolatePlasma;

        case Sequential.Warm:
            return interpolateWarm;

        case Sequential.Cool:
            return interpolateCool;

        case Sequential.Rainbow:
            return interpolateRainbow;

        case Sequential.Cubehelix:
            return interpolateCubehelixDefault;

        default:
            return undefined;
    }
}

export default interpolateSequential;