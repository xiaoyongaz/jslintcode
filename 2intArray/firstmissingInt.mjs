/**
1: A[i] is in the range;
2: A[i] > 0.
3: The target is different; 
 * @param A: An array of integers
 * @return: An integer
 */
export function firstMissingPositive(A) {
    let len = A.length;
    for(let i = 0; i< len; i++){
        while(A[i] <= len && A[i] >0 && A[A[i]-1] != A[i]){
            let temp = A[A[i]-1];
            A[A[i]-1] = A[i];
            A[i] = temp;
        }
    }

    for(let i = 0; i< len; i++){
        if(A[i] != i+1) return i+1;
    }
}


