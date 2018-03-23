const apiUpdate = state => ({
  update() {
    state._data = state._composers.data(state._data, state._options, false);
    state._color = state._composers.color(
      state._options.color,
      state._data,
      state._options
    );
  },
});

export default apiUpdate;
