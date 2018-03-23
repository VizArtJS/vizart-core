import { mergeOptions } from '../options/index';

const apiOptions = state => ({
  options(opt) {
    state._options = mergeOptions(state._options, opt);
    return state._options;
  },
});

export default apiOptions;
