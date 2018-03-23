const apiOn = state => ({
  on: (name, callback) => {
    state._listeners.on(name, callback);
  },
});

export default apiOn;
