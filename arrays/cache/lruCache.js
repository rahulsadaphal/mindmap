class LRUCache {
    constructor(capacity) {
        this.cache = []
        this.capacity = capacity
    }
    set(k, v) {
        if (this.cache.length == 0) {
            this.cache.push({
                k,
                v,
                o: 0
            })
        } else {
            //check if key is present
            const ind = this.cache.findIndex(el => {
                return el.k == k
            })
            if (ind == -1) {
                //check if cache is full
                if (this.cache.length == this.capacity) {
                    // remove lru key and then push new val
                    //sort cache and remove smallest occurence key
                    this.cache.sort((a, b) => a.o - b.o)
                    this.cache.splice(0, 1)
                    //then insert new key
                    this.cache.unshift({
                        k,
                        v,
                        o: 0
                    })
                } else {
                    //insert element
                    this.cache.unshift({
                        k,
                        v,
                        o: 0
                    })
                }

            } else {
                //update element
                this.cache[ind].v = v;
            }
        }
    }
    get(k) {
        const ind = this.cache.findIndex(el => {
            return el.k == k
        })
        if (ind == -1) {
            return -1
        } else {
            //update the usage count
            this.cache[ind].o = this.cache[ind].o + 1
            //return the val
            return this.cache[ind].v
        }
    }
}


const t1 = new LRUCache(3)
t1.get(1)
t1.set(1, 1)
t1.set(2, 2)
t1.set(2, 3)
t1.get(1)
t1.get(1)
t1.set(3, 3)
t1.set(4, 4)