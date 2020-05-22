/**
 * "下沉"调整
 * @param array             待调整的堆
 * @param parentIndex       要"下沉"的父节点
 * @param length            堆的有效大小
 */
function downAdjust(array, parentIndex, length) {
    // temp保存父节点的值，用于最后的赋值
    let temp = array[parentIndex]
    let childIndex = 2 * parentIndex + 1
    while(childIndex < length) {
        // 如果有右孩子，且右孩子大于左孩子的值，则定位到右孩子
        if (childIndex + 1 < length && array[childIndex + 1] > array[childIndex]) {
            childIndex ++
        }
        // 如果父节点大于任何一个孩子的值，则直接跳出
        if (temp >= array[childIndex])
            break
        // 无须真正交换，单向赋值即可
        array[parentIndex] = array[childIndex]
        parentIndex = childIndex
        childIndex = 2 * childIndex + 1
    }
    array[parentIndex] = temp
}

/**
 * 堆排序（升序）
 * @param array            待调整的堆
 */
function heapSort(array) {
    // 1.把无序数组构建成最大堆
    for (let i = Math.floor((array.length - 2) / 2); i >= 0; i--) {
        downAdjust(array, i, array.length)
    }
    // 2.循环删除堆顶元素，移到集合尾部，调整堆产生新的堆顶
    for (let i = array.length - 1; i > 0; i --) {
        // 最后1个元素和第一个元素进行交换
        let temp = array[i]
        array[i] = array[0]
        array[0] = temp
        // "下沉"调整最大堆
        downAdjust(array, 0, i)
    }
    console.log(array) 
}

let testArray = [10, 7, 5, 6, 8, 9, 3, 2, 4, 11]
console.time("heapSort")
heapSort(testArray)
console.timeEnd("heapSort")