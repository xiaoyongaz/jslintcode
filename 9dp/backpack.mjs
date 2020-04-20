function backPackHelper(m, A, index, maxPackMap){
    if(maxPackMap[index][m] !== undefined) return maxPackMap[index][m];

    if(index >= A.length) {
        maxPackMap[index][m] = 0;
        return 0;
    }

    if(A[index] <= m){
        let include = A[index] + backPackHelper(m - A[index], A, index+1, maxPackMap);
        let exclude = backPackHelper(m, A, index+1, maxPackMap);
        let max = Math.max(include, exclude);
        maxPackMap[index][m] = max;
        return max;
    }

    let max = backPackHelper(m, A, index+1, maxPackMap);
    maxPackMap[index][m] = max;
    return max;
}

/**
 * @param m: An integer m denotes the size of a backpack
 * @param A: Given n items with size A[i]
 * @return: The maximum size
 */
export function backPack (m, A) {
    let maxPackMap = []; 
    for(let i = 0; i <=A.length; i++) maxPackMap[i] = [];
    let max = backPackHelper(m, A, 0, maxPackMap);
    return max;
}


