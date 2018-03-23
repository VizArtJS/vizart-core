/*
 Gets the browser window size
 Returns object with height and width properties
 */
const windowSize = () => {
  // Most recent browsers use
  if (window.innerWidth && window.innerHeight) {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  // IE can use depending on mode it is in
  if (
    document.compatMode == 'CSS1Compat' &&
    document.documentElement &&
    document.documentElement.offsetWidth
  ) {
    return {
      width: document.documentElement.offsetWidth,
      height: document.documentElement.offsetHeight,
    };
  }

  // Earlier IE uses Doc.body
  if (document.body && document.body.offsetWidth) {
    return {
      width: document.body.offsetWidth,
      height: document.body.offsetHeight,
    };
  }

  return { width: 640, height: 480 };
};

export default windowSize;
