/**
 * @param A: an integer sorted array
 * @param target: an integer to be inserted
 * @return: An integer
 */
export function  searchInsert(A, target) {
    let len = A.length;
    if(len === 0) return 0;
    if(len === 1){
        if(target < A[0]) return 0;
        return 1;
    }

    let l = 0;
    let r = len -1;
    while( r -l > 1){
        let m = Math.floor((l + r)/2);
        if( A[m] <= target) l = m;
        else r = m;
    }

    if(A[r] < target) return r + 1;
    if(A[r] > target && A[l] < target) return r; 
    if(A[l] > target) return 0;
    if(A[r] === target) return r;
    if(A[l] === target) return l;
}


