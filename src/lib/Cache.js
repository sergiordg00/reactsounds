/** Extremely simple cache system. Lots of things are missing such as: custom revalidation times, action system for invalidating the data... */
class Cache {
  constructor() {
    this._cache = {}; /** @note We could have an init from disk to restore the last thing that the user was seeing (like twitter does) to create better feeds for example. This system has a lot of potential. Could be a future project :D */
    this._removalTimeouts = {};
  }

  get(key) {
    return this._cache[key];
  }

  set(key, value) {
    this._cache[key] = value;

    if(this._removalTimeouts[key]) {
      clearTimeout(this._removalTimeouts[key]);
    }

    this._removalTimeouts[key] = setTimeout(() => {
      this.remove(key);
      delete this._removalTimeouts[key];
    }, 1000 * 60 * 5); 
  }

  update(key, value) {
    if(this._cache[key]) {
      this._cache[key] = value;
    }
  }

  remove(key) {
    delete this._cache[key];
  }

  clear() {
    this._cache = {};
  }
}

export const cacheClient = new Cache();