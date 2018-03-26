import {genericColor} from "../color";

const defaultComposers = {
    opt: null,
    data: (data, opt, cleanse) => data,
    color: (color, data, opt) => genericColor(color),
};

export default defaultComposers;