class Queue {
    constructor() {
        this.front = 0;
        this.rear = -1;
        this.capacity;
        this.que_size = 0;
        this.arr = [];
    }

    size(x) {
        this.capacity = x;
        this.arr = new Array(this.capacity);
    }
    isEmpty() {
        this.que_size == 0 ? true : false
    }
    isFull() {
        this.capacity = this.que_size ? true : false
    }
    enqueue(num) {
        if(this.que_size == this.capacity) return "overflow"
        this.arr[++this.rear] = num
        this.que_size++
    }
    dequeue() {
        if(this.arr.length == 0) return "underflow"
        let item = this.arr[this.front]
        this.front = (this.front + 1) % this.capacity
        if(this.rear == this.capacity-1) this.rear = -1;
        this.que_size--;
        return item
    }
    front1() {
        return this.arr[this.front]
    }
    rear1() {
        return this.arr[this.rear]
    }
    get(){
        return this.arr
    }
}


let q = new Queue()
q.size(5)
console.log(q.enqueue(1))
console.log(q.enqueue(2))
console.log(q.enqueue(3))
console.log(q.enqueue(4))
console.log(q.enqueue(5))
console.log(q.enqueue(6))
console.log(q.get())

console.log(q.dequeue())
console.log(q.get())
console.log(q.front1(), q.rear1())


 