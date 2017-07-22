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


// Categorical
const Accent = 'Accent';
const Dark2 = 'Dark2';
const Paired = 'Paired';
const Pastel1 = 'Pastel1';
const Pastel2 = 'Pastel2';
const Set1 = 'Set1';
const Set2 = 'Set2';
const Set3 = 'Set3';

const Category10 = 'Category10';
const Category20 = 'Category20';
const Category20b = 'Category20b';
const Category20c = 'Category20c';

let interpolateCategorical = function(_name) {
    switch (_name) {
        // categorical
        case Accent:
            return schemeAccent;

        case Dark2:
            return schemeDark2;

        case Paired:
            return schemePaired;

        case Pastel1:
            return schemePastel1;

        case Pastel2:
            return schemePastel2;

        case Set1:
            return schemeSet1;

        case Set2:
            return schemeSet2;

        case Set3:
            return schemeSet3;


        // categorical
        case Category10:
            return schemeCategory10;

        case Category20:
            return schemeCategory20;

        case Category20b:
            return schemeCategory20b;

        case Category20c:
            return schemeCategory20c;

        default:
            return undefined;
    }
}

export default interpolateCategorical;