const cvs = document.createElement('canvas');
const ctx = cvs.getContext('2d');
cvs.width = 1000;
cvs.height = 1;

export const OnePixelPng = cvs.toDataURL();

const map = new WeakMap();
const observer = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const cbs = map.get(entry.target);
    for (const callback of cbs) {
      callback(entry);
    }
  }
});

export function observeSize(dom, callback) {
  let cbs = map.get(dom);
  if (!cbs) {
    cbs = new Set();
    map.set(dom, cbs);
  }
  cbs.add(callback);
  observer.observe(dom);
  return () => {
    cbs.delete(callback);
    observer.unobserve(dom);
  };
}
