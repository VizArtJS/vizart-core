const compose = (baseLayer, fns) =>
  fns.reduce((acc, cur) => {
    acc = Object.assign(acc, cur(acc));
    return acc;
  }, baseLayer);

const factory = (baseLayer, composers, apis) => (id, opt) =>
  compose(baseLayer(id, opt, composers), apis);

export default factory;
