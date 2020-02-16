
export function charMapping(inputs){
    let mapping = new Map();
    for(const c of inputs){
        let v = mapping.get(c) || 0;
        mapping.set(c, ++v);
    }
    return mapping;
}

export function compareMapping(s, t){
    for(const [k,v] of s.entries()){
        if(t.get(k) != v) return false;
    }
    return s.size === t.size;
}

/**
 * @param s: The first string
 * @param t: The second string
 * @return: true or false
 */
export function anagram(s, t) {
   let sMapping = charMapping(s);
   let tMapping = charMapping(t);
   return compareMapping(sMapping, tMapping);     
}



