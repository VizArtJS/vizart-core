import {genericColor} from "../color";

const DefaultDataComposer = (data, opt, cleanse) => data;
const DefaultColorComposer = (color, data, opt) => genericColor(color);

const makeComposers = comp => {
    return {
        opt: comp.opt || null,
        data: comp.data || DefaultDataComposer,
        color: comp.color || DefaultColorComposer,
    }
}

export default makeComposers;