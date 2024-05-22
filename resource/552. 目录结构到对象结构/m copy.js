const moduleMap = import.meta.glob(['./bar/**/*.js', './foo/**/*.js'], {
  eager: true,
  import: 'default',
});
const result = {};
for (const path in moduleMap) {
  const matches = path.match(/[^\.\/]+/g).slice(0, -1);
  let current = result;
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    current[match] = current[match] || {};
    if (i === matches.length - 1) {
      current[match] = moduleMap[path];
    }
    current = current[match];
  }
}

export default result;
