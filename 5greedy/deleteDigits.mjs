/**
 * @param A: A positive integer which has N digits, A is a string
 * @param k: Remove k digits
 * @return: A string
 */

//A is a string of digits
function removePeak(A, k){
    //return A
    let start = 0;
    let len = A.length;
    while(k > 0 && start < len -1){
        if(A[start] > A[start+1]) {
            for(let i = start; i < len - 1; i++) A[i] = A[i+1];
            k--;
            len--;
            start = 0;
        }
        else start++;
    }
    start = 0;
    while(start < len && A[start] === '0') start++;
    return A.slice(start, len - k);
}

//from start to end, continue to do remove 9, then 8 ... until removed total K
export function DeleteDigits(A, k) {
    let currentDigit = 9;
    let chars = [...A];
    let re  = removePeak(chars, k);
    let res = re.join("");
    return res; 
}


