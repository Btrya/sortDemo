function maopaosort1(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            let temp = 0
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

function maopaosort2(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
        let isSorted = true
        for (let j = 0; j < arr.length - i - 1; j++) {
            let temp = 0
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSorted = false
            }
        }
        if (isSorted) {
            break
        }
    }
    return arr
}

function maopaosort3(arr) {
    let lastExchangeIndex = 0 // 记录最后一次交换的位置
    let sortBorder = arr.length - 1 // 无序数列的边界，每次必须只需要比到这里为止
    for (let i = 0; i < arr.length - 1; i ++) {
        let isSorted = true
        for (let j = 0; j < sortBorder; j++) {
            let temp = 0
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSorted = false // 因为有元素进行交换，所以不是有序的，标记变为fasle
                lastExchangeIndex = j // 更新为最后一次交换元素的位置
            }
        }
        sortBorder = lastExchangeIndex
        if (isSorted) {
            break
        }
    }
    return arr
}

function cocktailSort(arr) {
    let temp = 0
    for (let i = 0; i < arr.length / 2; i ++) {
        let isSorted = true
        // 奇数轮，从左向右比较和交换
        for (let j = i; j < arr.length - i - 1; j ++) {
            if(arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSorted = false
            }
        }
        if (isSorted) {
            break
        }
        // 在偶数轮之前，将isSorted重新标记为true
        isSorted = true
        // 偶数轮，从右向左比较和交换
        for (let j = arr.length - i - 1; j > i; j --) {
            if(arr[j] < arr[j - 1]) {
                temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
                isSorted = false
            }
        }
        if (isSorted) {
            break
        }
    }
    return arr
}


let testArray = [4, 4, 6, 5, 3, 2, 8, 1]
console.time("MaoPaoSort1")
maopaosort1([...testArray])
console.timeEnd("MaoPaoSort1")
console.time("MaoPaoSort2")
maopaosort2([...testArray])
console.timeEnd("MaoPaoSort2")
console.time("MaoPaoSort3")
maopaosort3([...testArray])
console.timeEnd("MaoPaoSort3")
console.time("cocktailSort")
cocktailSort([...testArray])
console.timeEnd("cocktailSort")