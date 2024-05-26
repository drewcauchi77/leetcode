// Arrays & Hashing

class MyHashSet {
    constructor() {
        this.set = [];
    }

    add(key) {
        this.set[key] = key;
    }

    remove(key) {
        this.set[key] = undefined;
    }

    contains(key) {
        return this.set[key] !== undefined;
    }
};

// Test cases
var obj = new MyHashSet();
obj.add(1);
console.log(obj);
obj.remove(1);
console.log(obj);
var param_3 = obj.contains(1);
console.log(param_3);

// Submitted 26 April 2024 14:23
// Runtime 157ms - beats 53.24%;
// Memory 63.18MB - beats 33.61%