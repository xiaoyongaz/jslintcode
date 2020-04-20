/**
 * @param x: the base number
 * @param n: the power number
 * @return: the result
 */
export function myPow (x, n) {
    let bit = 1;
    let result = 1;
    let xpow = x;
    if(n === 0) return 1;
    while(bit < n){
        if(bit & n){
            result *= xpow;
        }
        xpow = xpow*xpow;
        bit = bit << 1;
    }
    return result;
}
