import mergeWith from 'lodash-es/mergeWith';
import MergeCustomizer from './MergeCustomizer';

const merge = (target, source) => {
  if (source === undefined || source === null) return target;

  mergeWith(target, source, MergeCustomizer);

  return target;
};

export default merge;
