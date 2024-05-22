// 去掉字符串中的元素标记
const removeTag = (fragment) =>
  new DOMParser().parseFromString(fragment, 'text/html').body.textContent || '';

// test
removeTag(`<div>Hello World</div>`); // Hello World
