const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
  }

  insert(key, value) {
    const index = simpleHash(key, this.limit);
    console.log(index, this.storage);
    if (!this.storage.hasOwnProperty(index)) {
      console.log("yay!");
      this.storage.set(index, value);
    } else {
      this.storage.set(index, value);
    }
  }

  retrieve(key) {
    const idx = simpleHash(key, this.limit);
    return this.storage.get(idx);
  }

  // controlledArray.each = (callback) => {
  //   for (let i = 0; i < storage.length; i += 1) {
  //     callback(storage[i], i, storage);
  //   }
  // };
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
