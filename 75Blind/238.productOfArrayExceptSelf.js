const productExceptSelf = function(nums) {    
    const res = new Array(nums.length)

    let prefix = 1
    for(let i=0; i<nums.length; i++){
        res[i] = prefix
        prefix = nums[i] * prefix
    }

    let postfix = 1
    for(let i=nums.length-1; i>=0; i--){
        res[i] = res[i] * postfix
        postfix = nums[i] * postfix
    }
    return res
};