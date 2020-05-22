function quickSort(arr, startIndex, endIndex) {
    // 递归结束条件： startIndex大于或等于endIndex
    if (startIndex >= endIndex) {
        return
    }
    // 得到基准元素位置
    // let pivotIndex = partitonA(arr, startIndex, endIndex)  // 双边循环
    let pivotIndex = partitonB(arr, startIndex, endIndex)  // 单边循环
    // 根据基准元素，分成两部分进行递归排序
    quickSort(arr, startIndex, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, endIndex)
    // console.log(arr)
    return arr
}
/**
 * 分治(双边循环法)
 * @param arr               待交换的数组
 * @param startIndex        起始下标
 * @param endIndex          结束下标
 */
function partitonA(arr, startIndex, endIndex) {
    // 取第1个位置（也可以取随机位置）的元素作为基准元素
    let pivot = arr[startIndex]
    let left = startIndex
    let right = endIndex
    while(left != right) {
        // 控制right指针比较并左移
        while(left < right && arr[right] > pivot) {
            right --
        }
        // 控制left指针比较并右移
        while(left < right && arr[left] <= pivot) {
            left ++
        }
        // 交换left和right指针所指向的元素
        if (left < right) {
            let p = arr[left]
            arr[left] = arr[right]
            arr[right] = p
        }
    }
    // pivot和指针重合点交换
    arr[startIndex] = arr[left]
    arr[left] = pivot
    return left
}

/**
 * 分治（单边循环法）
 * @param arr                   待交换的数组
 * @param startIndex            起始下标
 * @param endIndex              结束下标
 */
function partitonB(arr, startIndex, endIndex) {
    // 取第1个位置（也可以取随机位置）的元素作为基准元素
    let pivot = arr[startIndex]
    let mark = startIndex
    for (let i = startIndex + 1; i <= endIndex; i++) {
        if (arr[i] < pivot) {
            mark ++
            let p = arr[mark]
            arr[mark] = arr[i]
            arr[i] = p
        }
    }
    arr[startIndex] = arr[mark]
    arr[mark] = pivot
    return mark
}

// 非递归方法实现
function mapQuickSort(arr, startIndex, endIndex) {
    // 用一个集合栈来代替递归的函数栈
    let quickSortStack = new Array()
    // 整个数列的起止下标，以哈希的形式入栈
    let rootParam = new Map()
    rootParam.set("startIndex", startIndex)
    rootParam.set("endIndex", endIndex)
    quickSortStack.push(rootParam)
    // 循环结束条件： 栈为空时
    while(!quickSortStack.length <= 0) {
        // 栈顶元素出栈，得到起止下标
        let param = quickSortStack.pop()
        // 得到基准元素位置
        let pivotIndex = partitonB(arr, param.get("startIndex", param.get("endIndex")))
        // 根据基准元素分成两部分，把每一部分的起止下标入栈
        if (param.get("startIndex") < pivotIndex - 1) {
            let leftParam = new Map()
            leftParam.set("startIndex", param.get("startIndex"))
            leftParam.set("endIndex", pivotIndex -1 )
            quickSortStack.push(leftParam)
        }
        if (pivotIndex + 1 < param.get("endIndex")) {
            let rightParam = new Map()
            rightParam.set("startIndex", pivotIndex + 1)
            rightParam.set("endIndex", rightParam.get("endIndex"))
            quickSortStack.push(rightParam)
        }
    }
}

let testArray = [4, 4, 6, 5, 3, 2, 8, 1]
console.time('quickSort')
quickSort([...testArray], 0, testArray.length - 1)
console.timeEnd('quickSort')
console.time('mapQuickSort')
mapQuickSort([...testArray], 0, testArray.length - 1)
console.timeEnd('mapQuickSort')