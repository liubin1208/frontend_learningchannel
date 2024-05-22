class LRUCache {
  #map;
  #length;
  constructor(length) {
    this.#map = new Map();
    this.#length = length;
  }

  get(key) {
    if (!this.#map.has(key)) {
      return;
    }
    const value = this.#map.get(key);
    this.#map.delete(key);
    this.#map.set(key, value);
    return value;
  }

  set(key, value) {
    if (this.#map.has(key)) {
      this.#map.delete(key);
    }
    this.#map.set(key, value);
    if (this.#map.size > this.#length) {
      const firstKey = this.#map.keys().next().value;
      this.#map.delete(firstKey);
    }
  }
}
