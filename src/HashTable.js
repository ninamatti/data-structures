const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
  }

  insert(key, value) {
    const index = simpleHash(key, this.limit);
    if (!this.storage.hasOwnProperty(index)) {
      this.storage.set(index, value);
    } else {
      this.storage.set(index, value);
    }
  }

  retrieve(key) {
    const idx = simpleHash(key, this.limit);
    return this.storage.get(idx);
  }

  remove(key) {
    let couldRemove = false;
    const idx = simpleHash(key, this.limit);
    this.storage.each((value, index, storage) => {
      if (index === idx) {
        if (value !== null) {
          storage[idx] = null;
          couldRemove = true;
        }
      }
    });
    return couldRemove;
  }
}

module.exports = HashTable;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
