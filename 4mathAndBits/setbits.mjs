/**
 * @param n: An integer
 * @param m: An integer
 * @param i: A bit position
 * @param j: A bit position
 * @return: An integer
   */

export function b32(n) {
  // >>> ensures highest bit isn’t interpreted as a sign
  return (n >>> 0).toString(2).padStart(32, '0');
}

export function updateBits(n, m, i, j) {
    console.log(b32(n));
    console.log(b32(m));
    let shiftedM = m << i;
    console.log(b32(shiftedM));
    let bit = 1 << i;
    for(let l = 0; l < (j-i+1); l++){
        if( (shiftedM & bit) != 0){
            n = n | bit;
        }else {
            n = n & (~bit);
        }
        bit = bit << 1;
    }
    console.log(b32(n));
    return n;
}


