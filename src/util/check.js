import isNaN from 'lodash-es/isNaN';

const check = d => d !== undefined && d !== null && !isNaN(d);

export default check;
