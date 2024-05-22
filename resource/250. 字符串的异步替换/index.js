import getName from './getName.js';

String.prototype.asyncReplaceAll = function (pattern, placement) {
  if (typeof placement === 'string') {
    return this.replaceAll(pattern, placement);
  }
  if (typeof placement !== 'function') {
    throw new TypeError(
      'The second argument should be an async function or a string'
    );
  }
  let reg;
  if (typeof pattern === 'string') {
    reg = new RegExp(pattern.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'), 'g');
  } else if (pattern instanceof RegExp) {
    if (!pattern.global) {
      throw new TypeError('The pattern RegExp should have the global flag set');
    }
    reg = new RegExp(pattern);
  } else {
    throw new TypeError('The pattern should be a string or a RegExp');
  }
  let match;
  const parts = [];
  let lastIndex = 0;
  while ((match = reg.exec(this)) !== null) {
    const str = this.slice(lastIndex, match.index);
    lastIndex = reg.lastIndex;
    const args = [...match, match.index, match.input];
    if (match.groups) {
      args.push(match.groups);
    }
    const prom = placement(...args);
    parts.push(str);
    parts.push(prom);
  }
  parts.push(this.slice(lastIndex));
  return Promise.all(parts).then((results) => {
    return results.join('');
  });
};

(async () => {
  const inputString = '23,21,3-34-632-211,)23——453asdfasdfasfd';

  const result = await inputString.asyncReplaceAll(/\d+/g, async (match) => {
    return getName(match);
  });
  console.log(result);
})();

// const template = `234,55-234_j24——455`;

// const reg = /(\d+)|(\D+)/g;
// const matches = template.match(reg);
// const result = await Promise.all(
//   matches.map((n) => (/^\d+$/.test(n) ? getName(n) : n))
// );
// console.log(result.join(''));
// const names = await Promise.all(matches.map(getName));
// let result = template;
// for (let i = 0; i < matches.length; i++) {
//   const m = matches[i];
//   const n = names[i];
//   result = result.replace(m, n);
// }
// console.log(result);
