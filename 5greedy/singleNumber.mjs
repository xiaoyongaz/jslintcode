/**
 * @param A: An integer array
 * @return: An integer
 */
export function singleNumber(A) {
    let numMaps = new Map();
    for(const i of A){
        let cnt = numMaps.get(i) || 0;
        cnt++;
        numMaps.set(i, cnt);
    }
    
    for(const [key, value] of numMaps.entries()){
        if(value === 1) return key;
    }
    return undefined;
}


