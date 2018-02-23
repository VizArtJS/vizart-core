import mergeWith from 'lodash-es/mergeWith';
import MergeCustomizer from './MergeCustomizer';

const mergeOptions = (_target, _source) => {
  if (_source === undefined || _source === null) return _target;

  mergeWith(_target, _source, MergeCustomizer);

  return _target;
};

export default mergeOptions;
