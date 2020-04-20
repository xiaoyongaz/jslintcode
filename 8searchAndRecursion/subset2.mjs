function compareNumbers(a, b) {
  if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
}

function subsetHelper(nums, current, start, collector){
    collector.push([...current]);
    for(let i = start; i < nums.length; i++){
        if(i !== start && nums[i] === nums[i-1]) continue;
        current.push(nums[i]);
        subsetHelper(nums, current, i+1, collector);
        current.pop();
    }
}

/**
 * @param nums: A set of numbers.
 * @return: A list of lists. All valid subsets.
 */
export function subsetsWithDup(nums) {
    let collector = [];
    let current = [];
    nums.sort(compareNumbers);
    let r = subsetHelper(nums, current, 0, collector);
    return r;
}


