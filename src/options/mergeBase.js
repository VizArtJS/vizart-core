import cloneDeep from 'lodash-es/cloneDeep';
import BaseOptions from './BaseOptions';
import mergeOptions from './mergeOptions';

const mergeBase = (...opts)=> {
    let _base = cloneDeep(BaseOptions);

    for (let o of opts) {
        mergeOptions(_base, o);
    }

    return _base;
};

export default mergeBase;
