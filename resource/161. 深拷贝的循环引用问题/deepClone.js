function deepClone(obj) {
  const objectMap = new Map();
  const _deepClone = (value) => {
    const type = typeof value;
    if (type !== 'object' || type === null) {
      return value;
    }
    if (objectMap.has(value)) {
      return objectMap.get(value);
    }
    const result = Array.isArray(value) ? [] : {};
    objectMap.set(value, result);
    for (const key in value) {
      result[key] = _deepClone(value[key]);
    }
    return result;
  };
  return _deepClone(obj);
}
