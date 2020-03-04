/**
 * @param a: An integer
 * @param b: An integer
 * @return: An integer
 */
export function bitSwapRequired(a, b) {
    let swapCnt =0;
    let bit = 1;
    for(let i = 0; i < 31; i++){
        if( (bit & a) != (bit & b)) swapCnt++;
        bit = bit << 1;
    }
    return swapCnt;
}


