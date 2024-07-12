var relativeSortArray = function (arr1, arr2) {
    let res = []
    arr1.sort((a, b) => a - b)
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                res.push(arr2[i])
            }
        }
    }
    for (let val of arr1) {
        if (arr2.indexOf(val) === -1) {
            res.push(val)
        }
    }
    return res
};