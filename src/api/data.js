const apiData = state => ({
  data(data) {
    if (data !== undefined && data !== null) {
      state._data = state._composers.data(data, state._options, true);
    }

    return state._data;
  },
});

export default apiData;
