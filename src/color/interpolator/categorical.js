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


import Categorical from '../preset/categorical';


let interpolateCategorical = function(_name) {
    switch (_name) {
        // categorical
        case Categorical.Accent:
            return schemeAccent;

        case Categorical.Dark2:
            return schemeDark2;

        case Categorical.Paired:
            return schemePaired;

        case Categorical.Pastel1:
            return schemePastel1;

        case Categorical.Pastel2:
            return schemePastel2;

        case Categorical.Set1:
            return schemeSet1;

        case Categorical.Set2:
            return schemeSet2;

        case Categorical.Set3:
            return schemeSet3;


        // categorical
        case Categorical.Category10:
            return schemeCategory10;

        case Categorical.Category20:
            return schemeCategory20;

        case Categorical.Category20b:
            return schemeCategory20b;

        case Categorical.Category20c:
            return schemeCategory20c;

        default:
            return undefined;
    }
}

export default interpolateCategorical;