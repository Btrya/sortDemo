class LRUCache{
    constructor(max) {
        this.max = max
        this.cache = {}
        this.keys = []
    }
    get = (k) => {
        if (this.cache[k]) {
            this.remove(this.keys, k)
            this.keys.push(k)
            return this.cache[k]
        } else {
            return -1
        }
    }
    add = (k, v) => {
        if (this.cache[k])
            return
        this.keys.push(k)
        if (this.keys.length > this.max) {
            delete this.cache[this.keys[0]]
            this.keys.shift()
        }
        this.cache[k] = v
    }
    remove = (arr, item) => {
        if (arr.length) {
            const itemIndex = arr.indexOf(item)
            if (itemIndex > -1) {
                return arr.splice(itemIndex, 1)
            }
        }
    }
}

const lru = new LRUCache(4);
lru.add(1, 1);
lru.add(2, 2);
lru.add(3, 3);
lru.add(4, 4);
console.log(lru.get(2))
console.log(lru.get(1))
console.log(lru.get(2))
lru.add(5, 5);
console.log(lru.cache)