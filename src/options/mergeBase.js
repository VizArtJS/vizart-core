import baseOpt from './baseOptions';
import merge from './merge';

const mergeOptions = (...opts) => {
  const base = Object.assign({}, baseOpt());

  for (let o of opts) {
    merge(base, o);
  }

  return base;
};

export default mergeOptions;
