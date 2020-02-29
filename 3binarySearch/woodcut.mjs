/*
 * Input:
xplanation: We can cut it into 7 pieces if any piece is 114cm long, however we can't cut it into 7 pieces if any piece is 115cm long.

Input:
L = [1, 2, 3]
k = 7
Output: 0
Explanation: It is obvious we can't make it.
*/

//given a piece lf totalLen and one piece length cutLen, return number of cuts 
function numberOfCut(len, cutLen){
    return Math.floor(len/cutLen);
}

function totalCuts(L, cutLen){
    let sum = 0;
    for(let i of L) sum += numberOfCut(i, cutLen);
    return sum;
}

export function woodCut(L, k) {
    // write your code here
    let sum =0;
    for(let i of L) sum += i;
    if(sum < k) return 0;
    
    let shortest = 1;
    let longest = Math.max(...L);
    while(longest - shortest > 1){
        let mLen = Math.floor((shortest + longest)/2);
        let mCuts = totalCuts(L, mLen);
        if(mCuts >= k) {
            shortest = mLen;
        }else {
            longest = mLen;
        }
    }
    if(totalCuts(L, longest) >= k) return longest;
    if(totalCuts(L, shortest) >= k) return shortest;
    return 0;
}


