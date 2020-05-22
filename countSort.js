function countSort(array) {
    // 1.得到数列的最大值
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    // 2.根据数列最大值确定统计数组的长度
    let countArray = new Array(max + 1).fill(0)
    // 3.遍历数列，填充统计数组
    for (let i = 0; i < array.length; i++) {
        countArray[array[i]]++
    }
    // 4.遍历统计数组，输出结果
    let resArray = []
    countArray.forEach((item, index) => {
        for (let i = 0; i < item; i++) {
            resArray.push(index)
        }
    })
    return resArray
}

function countSort2(array) {
    // 1.得到数列的最大值和最小值，并算出差值d
    let max = array[0]
    let min = array[0]
    for (let i = 1; i< array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
        if (array[i] < min) {
            min = array[i]
        }
    }
    let d = max - min
    // 2.创建统计数组并统计对应元素的个数
    let countArray = new Array(d + 1).fill(0)
    for (let i = 0; i < array.length; i++) {
        countArray[array[i] - min] ++
    }
    // 3.统计数组做变形，后边的元素等于前面的元素之和
    for (let i = 1; i < countArray.length; i++) {
        countArray[i] += countArray[i - 1]
    }
    // 4.倒序遍历原始数列，从统计数组找到正确位置，输出到结果数组
    let sortedArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        sortedArray[countArray[array[i] - min] - 1] = array[i]
        countArray[array[i] - min] --
    }
    return sortedArray
}

let testArray = [4, 4, 6, 5, 3, 2, 8, 1, 4, 4, 6, 5, 3, 2, 8, 1, 4, 4, 6, 5, 3, 2, 8, 1, 10, 13]
console.time("countSort")
console.log(countSort([...testArray]))
console.timeEnd("countSort")
let testArray2 = [95, 94, 91, 98, 99, 90, 99, 93, 91, 92]
console.time("countSort2")
console.log(countSort2([...testArray2]))
console.timeEnd("countSort2")