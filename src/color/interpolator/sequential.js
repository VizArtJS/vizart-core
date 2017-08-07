import { scaleSequential } from 'd3-scale';
import { range, ascending, extent } from 'd3-array';
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

import isFunction from 'lodash-es/isFunction';
import isString from 'lodash-es/isString';

import * as Preset from '../preset/sequential';

const _mapScheme = (_scheme)=> {
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
            return undefined;
    }
}


const interpolateSequentialScheme = (_scheme, _num = 2)=> {
    if (_num < 2) {
        console.log('sequential color must be interpolated larger than 2, an scheme with 2 colors will be returned ')
    }

    const _break = _num < 2 ? 2 : _num;

    let _interpolator = _mapScheme(_scheme);
    let scale = scaleSequential(_interpolator);

    return range(0, 1, 1/_break).map(d => scale(d));
}

const interpolateSequential = (_scheme)=> scaleSequential(_mapScheme(_scheme));

const interpolateQuantile = (_scheme, _distinction = [0, 0.5, 1])=> {
    if (_distinction.length < 3) {
        console.log('distinction  must contains at least 3 elements, [0, 0.5, 1] will be used by default')
    }

    const _break = _distinction.length < 3 ? [0, 0.5, 1] : _distinction;

    const _standardize = scaleLinear().domain(extent(_break)).range(0,1);
    const _color = scaleSequential(_mapScheme(_scheme)).domain(0, 1);
    const _stops = _break.sort(ascending).map(d=> _color(_standardize(d)));

    return scaleQuantile().domain(_distinction).range(_stops)
}


export {
    interpolateSequentialScheme,
    interpolateSequential,
    interpolateQuantile
}