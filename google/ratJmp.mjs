function jumpHelper(arr, index, oddMap, evenMap, isOdd){
    if(index >= arr.length-1) return 1;
    if(arr[index] !== 0) return 0;
    if(isOdd){
        if(oddMap[index] !== undefined) return oddMap[index];
        
        //jump 1, 2, or 4
        let s1 = jumpHelper(arr, index+1, oddMap, evenMap, !isOdd);
        let s2 = jumpHelper(arr, index+2, oddMap, evenMap, !isOdd);
        let s4 = jumpHelper(arr, index+4, oddMap, evenMap, !isOdd);
        oddMap[index] = (s1+s2+s4)%(1e9 + 7);
        return oddMap[index];
    }
    else{
        if(evenMap[index] !== undefined) return evenMap[index];
        
        //jump 1, 3 or 4
        let s1 = jumpHelper(arr, index+1, oddMap, evenMap, !isOdd);
        let s3 = jumpHelper(arr, index+3, oddMap, evenMap, !isOdd);
        let s4 = jumpHelper(arr, index+4, oddMap, evenMap, !isOdd);
        evenMap[index] = (s1+s3+s4)%(1e9 + 7);
        return evenMap[index];
    }
}

/**
 * @param arr: the steps whether have glue
 * @return: the sum of the answers
 */
export function ratJump(arr) {
    let oddMap = [];
    let evenMap = [];
    let r = jumpHelper(arr, 0, oddMap, evenMap, true);
    return r;
}


