
function charMapping(inputs){
    let mapping = new Map();
    for(const c of inputs){
        let v = mapping.get(c) || 0;
        mapping.set(c, ++v);
    }
    return mapping;
}

function compareMapping(s, t){
    for(const [k,v] of s.entries()){
        if(t.get(k) != v) return false;
    }
    console.log(s.size);
    console.log(t.size);
    return s.size === t.size;
}

/**
 * @param s: The first string
 * @param t: The second string
 * @return: true or false
 */
export function anagram(s, t) {
    console.log(s);
    console.log(t);
   let sMapping = charMapping(s);
   let tMapping = charMapping(t);
   console.log(sMapping);
   console.log(tMapping);
   return compareMapping(sMapping, tMapping);     
}



