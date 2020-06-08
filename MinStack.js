class MinStack {
    constructor() {
        this.stack = []
        this.mins = Number.MAX_SAFE_INTEGER
    }
    push = (num) => {
        if (!this.stack.length || this.mins >= num) this.mins = num
        this.stack.push(num)
    }
    pop = () => {
        const popNum = this.stack.pop()
        if (popNum == this.mins) this.mins = Math.min(...this.stack)
        return popNum
    }
    top = () => {
        if (!this.stack.length) return null
        return this.stack[this.stack.length - 1]
    }
    getMin = () => {
        return this.mins
    }
}

const minStack = new MinStack()
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack)
console.log(minStack.getMin())
minStack.pop();
console.log(minStack.top())
console.log(minStack.getMin())


let nums = [1, 3, -1, -3, 5, 3, 6, 7],
    k = 3
function maxSlidingWindow(nums, k) {
    let max = []
    for (let i = 0; i <= nums.length - k; i++) {
        let item = Math.max(...nums.slice(i, k + i))
        max.push(item)
    }
    return max
}
console.log(maxSlidingWindow(nums, k))