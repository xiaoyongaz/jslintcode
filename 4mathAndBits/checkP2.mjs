/**
 * @param n: An integer
 * @return: True or false
 */
export function b32(n) {
  // >>> ensures highest bit isn’t interpreted as a sign
  return (n >>> 0).toString(2).padStart(32, '0');
}

export function checkPowerOf2(n) {
    if( n <= 0) return false;
    return (n & (n-1)) === 0;    
}


