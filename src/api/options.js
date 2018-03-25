import merge from '../options/merge';

const apiOptions = state => ({
  options(opt) {
    state._options = merge(state._options, opt);
    return state._options;
  },
});

export default apiOptions;
