/**
 * @param n: A long integer
 * @return: An integer, denote the number of trailing zeros in n!
 */
export function trailingZeros(n) {
    let s = 5;
    let fiveCnt = 0;
    while( s <= n){
        fiveCnt += Math.floor(n/s);
        s *= 5;
    }
    return fiveCnt;
}


