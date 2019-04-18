class Cache {
  constructor(storage = window.localStorage, expiredPeriod = 86400) {
    this.storage = storage;
    this.expiredPeriod = expiredPeriod;
  }

  getItem(key, def = null) {
    const item = JSON.parse(this.storage.getItem(key));
    let response = def;

    if (item && item.expires) {
      if (this.isExpired(item.expires)) {
        window.console.info(`Cache expired: ${key}`);
        this.removeItem(key);
      } else {
        window.console.info(`Cache HIT: ${key}`);
        response = item.payload || def;
      }
    }

    return response;
  }

  hasItem(key) {
    const item = this.storage.getItem(key);

    return item && !this.isExpired(item.expires);
  }

  isExpired(dateTime) {
    return dateTime < (new Date()).getTime();
  }

  getExpires() {
    return (new Date()).getTime() + this.expiredPeriod;
  }

  setItem(key, payload) {
    return this.storage.setItem(key, JSON.stringify({
      payload,
      expires: this.getExpires()
    }));
  }

  removeItem(key) {
    return this.storage.removeItem(key);
  }

  clear() {
    return this.storage.clear();
  }
}

export default new Cache();
