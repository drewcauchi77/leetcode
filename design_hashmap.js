// Arrays & Hashing

class MyHashMap {
    constructor() {
        this.map = [];
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key] !== undefined ? this.map[key] : -1;
    }

    remove(key) {
        delete this.map[key];
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// Test cases
var obj = new MyHashMap();
obj.put(1, 1);
console.log(obj);
var param_2 = obj.get(2)
console.log(param_2);
obj.remove(1);
console.log(obj);