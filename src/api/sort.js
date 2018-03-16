const sort = state => ({
  sort(accessor, direction) {
    state._options.ordering = {
      accessor: accessor,
      direction: direction,
    };

    state.update();
  },
});

export default sort;
