import {
    scaleOrdinal,
    scaleLinear
} from 'd3-scale';

import ckmeans from '../kmeans/index';


const _smartSequential = (_scheme, _data)=> {
    let _scale = scaleLinear();

    let schemeLen = _scheme.length;
    let dataLen = _data.length;

    let theDarkest = _scheme[schemeLen - 1];

    if (schemeLen === 0) {
        // nothing to do
    } else if (dataLen === 1) {
        // use the darkest
        _scale = scaleOrdinal().domain(_data[0]).range([theDarkest]);
    } else if (dataLen === schemeLen) {
        // use every single color
        _scale.domain(_data).range(_scheme);
    } else if (dataLen < schemeLen) {
        // sort data from the smallest to the largest

        let _trimmed = new Array(dataLen);

        let increment = (schemeLen - 1) / (dataLen - 1);
        let index = schemeLen - 1;

        for (let i = dataLen - 2; i > 0; i--) {
            index -= increment;
            _trimmed[i] = _scheme[i];
        }

        _trimmed[0] = _scheme[0];
        _trimmed[dataLen  - 1] = theDarkest;

        _scale.domain(_data).range(_trimmed);
    } else {
        // use kmeans
        let clusters = ckmeans(_data, schemeLen - 1);
        let breakpoints = clusters.map(d=> d[d.length - 1]);
        let _domain = [_data[0]].concat(breakpoints);

        _scale.domain(_domain).range(_scheme);
    }

    return _scale;
}

export default _smartSequential;