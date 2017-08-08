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

const interpolateCategoricalScheme = (_scheme) => {
    switch (_scheme) {
        // categorical
        case Preset.SchemeAccent:
            return schemeAccent;

        case Preset.SchemeDark2:
            return schemeDark2;

        case Preset.SchemePaired:
            return schemePaired;

        case Preset.SchemePastel1:
            return schemePastel1;

        case Preset.SchemePastel2:
            return schemePastel2;

        case Preset.SchemeSet1:
            return schemeSet1;

        case Preset.SchemeSet2:
            return schemeSet2;

        case Preset.SchemeSet3:
            return schemeSet3;


        // categorical
        case Preset.SchemeCategory10:
            return schemeCategory10;

        case Preset.SchemeCategory20:
            return schemeCategory20;

        case Preset.SchemeCategory20b:
            return schemeCategory20b;

        case Preset.SchemeCategory20c:
            return schemeCategory20c;

        default:
            return null;
    }
}


export default interpolateCategoricalScheme;