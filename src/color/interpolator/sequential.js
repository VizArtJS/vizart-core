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
    interpolateOranges,

    interpolateViridis,
    interpolateInferno,
    interpolateMagma,
    interpolatePlasma,
    interpolateWarm,
    interpolateCool,
    interpolateRainbow,
    interpolateCubehelixDefault,
} from "d3-scale-chromatic";

import isFunction from 'lodash-es/isFunction';
import isString from 'lodash-es/isString';

import * as Preset from '../preset/sequential';

const interpolateSequentialScheme = (_scheme)=> {
    if (!isFunction(_scheme) && !isString(_scheme)) {
        throw new Error(_scheme  + 'is invalid')
    }

    // user specified interpolator
    if (isFunction(_scheme)) {
        return _scheme;
    }

    //shortcode for internal interpolators
    switch(_scheme) {

        // sequential single hue
        case Preset.SchemeBlues:
            return interpolateBlues;

        case Preset.SchemeGreens:
            return interpolateGreens;

        case Preset.SchemeGreys:
            return interpolateGreys;

        case Preset.SchemeOranges:
            return interpolateOranges;

        case Preset.SchemeReds:
            return interpolateReds;

        case Preset.SchemePurples:
            return interpolatePurples;

        // Sequential (Multi-Hue)
        case Preset.SchemeBuGn:
            return interpolateBuGn;

        case Preset.SchemeBuPu:
            return interpolateBuPu;

        case Preset.SchemeGnBu:
            return interpolateGnBu;

        case Preset.SchemeOrRd:
            return interpolateOrRd;

        case Preset.SchemePuBuGn:
            return interpolatePuBuGn;

        case Preset.SchemePuBu:
            return interpolatePuBu;

        case Preset.SchemePuRd:
            return interpolatePuRd;

        case Preset.SchemeRdPu:
            return interpolateRdPu;

        case Preset.SchemeYlGnBu:
            return interpolateYlGnBu;

        case Preset.SchemeYlGn:
            return interpolateYlGn;

        case Preset.SchemeYlOrBr:
            return interpolateYlOrBr;

        case Preset.SchemeYlOrRd:
            return interpolateYlOrRd;

        // R Color
        case Preset.SchemeViridis:
            return interpolateViridis;

        case Preset.SchemeInferno:
            return interpolateInferno;

        case Preset.SchemeMagma:
            return interpolateMagma;

        case Preset.SchemePlasma:
            return interpolatePlasma;

        case Preset.SchemeWarm:
            return interpolateWarm;

        case Preset.SchemeCool:
            return interpolateCool;

        case Preset.SchemeRainbow:
            return interpolateRainbow;

        case Preset.SchemeCubehelix:
            return interpolateCubehelixDefault;

        default:
            return null;
    }
}

export default interpolateSequentialScheme;