import isArray from 'lodash-es/isArray';
import isObject from 'lodash-es/isObject';
import cloneDeep from 'lodash-es/cloneDeep';
import merge from 'lodash-es/merge';

const MergeCustomizer = (objValue, srcValue) => {
  if (isArray(objValue)) {
    let hasObjDef = false;
    for (let d of objValue) {
      if (isObject(d)) {
        hasObjDef = true;
        break;
      }
    }

    if (hasObjDef === false) {
      // copy rather than concat
      return srcValue;
    } else if (objValue.length === 0) {
      // target is placeholder but not template
      return srcValue;
    } else if (objValue.length === 1) {
      // the single and first value is used as template
      const _template = objValue[0];

      return srcValue.map(d => {
        let _tep = cloneDeep(_template);
        return merge(_tep, d);
      });
    } else {
      // target has multiple values, all source are merged by index

      return objValue.map((d, i) => {
        let _tep = cloneDeep(d);

        if (srcValue.length > i) {
          return merge(_tep, srcValue[i]);
        } else {
          return _tep;
        }
      });
    }
  }
};

export default MergeCustomizer;
