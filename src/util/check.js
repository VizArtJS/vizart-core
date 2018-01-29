import isUndefined from 'lodash-es/isUndefined';
import isNull from 'lodash-es/isNull';
import isNaN from 'lodash-es/isNaN';

let check = function(d) {
  return isUndefined(d) || isNull(d) || isNaN(d) ? false : true;
};

export default check;
