import interpolateCategorical from './categorical';
import interpolateDiverging from './divergent';
import interpolateSequential from './sequential';

let interpolatePreset = function(_name) {
    return interpolateCategorical(_name)
        || interpolateDiverging(_name)
        || interpolateSequential(_name);
}

export default interpolatePreset;