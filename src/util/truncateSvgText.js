// Given a text function and width function, truncates the text if necessary to
// fit within the given width.
const truncate = (text, width) => {
  return function(d, i) {
    let t = (this.textContent = text(d, i)),
      w = width(d, i);
    if (this.getComputedTextLength() < w) return t;
    this.textContent = '…' + t;
    let lo = 0,
      hi = t.length + 1,
      x;
    while (lo < hi) {
      let mid = (lo + hi) >> 1;
      if ((x = this.getSubStringLength(0, mid)) < w) lo = mid + 1;
      else hi = mid;
    }
    return lo > 1 ? t.substr(0, lo - 2) + '…' : '';
  };
};

export default truncate;
