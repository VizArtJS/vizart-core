import BaseOptions from './BaseOptions';
import mergeOptions from './mergeOptions';

const mergeBase = (...opts) => {
  const base = Object.assign({}, BaseOptions);

  for (let o of opts) {
    mergeOptions(base, o);
  }

  return _base;
};

export default mergeBase;
