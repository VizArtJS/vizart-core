import BaseOptions from './BaseOptions';
import merge from './merge';

const mergeOptions = (...opts) => {
  const base = Object.assign({}, BaseOptions);

  for (let o of opts) {
    merge(base, o);
  }

  return base;
};

export default mergeOptions;
