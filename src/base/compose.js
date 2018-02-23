const _compose = (f, g) => (...args) => f(g(...args));

const compose = (...fns) => fns.reduce(_compose);
const pipe = (...fns) => compose.apply(compose, fns.reverse());

export { compose, pipe };
