import {
    schemeAccent,
    schemeDark2,
    schemePaired,
    schemePastel1,
    schemePastel2,
    schemeSet1,
    schemeSet2,
    schemeSet3,
} from "d3-scale-chromatic";

import {
    schemeCategory10,
    schemeCategory20,
    schemeCategory20b,
    schemeCategory20c,
} from 'd3-scale';

import * as Preset from '../preset/categorical';

const _mapScheme = (_scheme) => {
    switch (_scheme) {
        // categorical
        case Preset.Accent:
            return schemeAccent;

        case Preset.Dark2:
            return schemeDark2;

        case Preset.Paired:
            return schemePaired;

        case Preset.Pastel1:
            return schemePastel1;

        case Preset.Pastel2:
            return schemePastel2;

        case Preset.Set1:
            return schemeSet1;

        case Preset.Set2:
            return schemeSet2;

        case Preset.Set3:
            return schemeSet3;


        // categorical
        case Preset.Category10:
            return schemeCategory10;

        case Preset.Category20:
            return schemeCategory20;

        case Preset.Category20b:
            return schemeCategory20b;

        case Preset.Category20c:
            return schemeCategory20c;

        default:
            return undefined;
    }
}

const interpolateCategorical = (_scheme) => {
    return scaleOrdinal(_mapScheme(_scheme));
}

export {
    interpolateCategorical
}