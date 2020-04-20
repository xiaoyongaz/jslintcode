/**
 * @param nums: a binary array
 * @return:  the maximum number of consecutive 1s
 */
export function findMaxConsecutiveOnes(nums) {
    let state1 = false;
    let max = 0;
    let currentCnt = 0;
    for(let n of nums){
        if(n === 1) state1 = true;
        else {
            state1 = false;
            if(currentCnt > max) max = currentCnt;
            currentCnt = 0;
        }
        if(state1) currentCnt++;
    }
    if(currentCnt > max) return currentCnt;
    return max;
}

