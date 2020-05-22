function bucketSort(array) {
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
    // 2.初始化桶
    let bucketNum = array.length
    let bucketList = new Array(bucketNum)
    for (let i = 0; i < bucketList.length; i++) {
        bucketList[i] = []
    }
    // 3.遍历原始数组，将每个元素放入桶中
    for (let i = 0; i < array.length; i++) {
        let num = ((array[i] - min) * (bucketNum - 1)) / d
        bucketList[Math.round(num)].push(array[i])
    }
    // 4.对每个桶内部进行排序
    for (let i = 0; i < bucketList.length; i++) {
        bucketList[i].sort()
    }
    // 5.输出全部元素
    let sortedArray = []
    for(let i of bucketList) {
        for(let j of i) {
            sortedArray.push(j)
        }
    }
    console.log(bucketList)
    console.log(sortedArray)
}


let testArray = [4.32, 6.421, 0.0023, 3.0, 2.123, 8.122, 4.21, 10.09]
bucketSort([...testArray])