import mergeWith from 'lodash-es/mergeWith';
import MergeCustomizer from './MergeCustomizer';

const mergeOptions = (_target, _source) => {
  mergeWith(_target, _source, MergeCustomizer);

  return _target;
};

export default mergeOptions;
