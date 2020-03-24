[-3,0,1,-2]

function maxHelper(nums, start, maxMap, maxStartMap, minStartMap){
    let index = nums.length -1;
    maxMap[index] = nums[index];
    maxStartMap[index] = nums[index];
    minStartMap[index] = nums[index];
   
    for(let i = index-1; i >=0; i--){
        maxStartMap[i] = Math.max(nums[i], nums[i]*maxStartMap[i+1], nums[i]*minStartMap[i+1]);
        minStartMap[i] = Math.min(nums[i], nums[i]*maxStartMap[i+1], nums[i]*minStartMap[i+1]);
        maxMap[i] = Math.max(maxMap[i+1], maxStartMap[i]);
    }
    return;
}

/**
 * @param nums: An array of integers
 * @return: An integer
 */
export function maxProduct (nums) {
    let maxMap = new Map();
    let maxStartMap = new Map();
    let minStartMap = new Map();
    maxHelper(nums, 0, maxMap, maxStartMap, minStartMap);
    return maxMap[0];
}
