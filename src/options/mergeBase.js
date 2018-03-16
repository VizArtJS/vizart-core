import BaseOptions from './BaseOptions';
import mergeOptions from './mergeOptions';

const mergeBase = (...opts) => {
  const _base = Object.assign({}, BaseOptions);

  for (let o of opts) {
    mergeOptions(_base, o);
  }

  return _base;
};

export default mergeBase;
