/*
Given an array of strings, return all groups of strings that are anagrams.
All inputs will be in lower-case
Example 1:
Input:["lint", "intl", "inlt", "code"]
Output:["lint", "inlt", "intl"]
Example 2:
Input:["ab", "ba", "cd", "dc", "e"]
Output: ["ab", "ba", "cd", "dc"]
*/
const aValue = 'a'.charCodeAt(0);

function charMapping(inputs){
    let mapping = new Array(26);
    for(const c of inputs){
        let index = c.charCodeAt(0) - aValue;
        let v = mapping[index] || 0;
        mapping[index] = ++v;
    }
    return mapping;
}

function hashCode(inputs) {
    let hash = 0;
    for (let i = 0; i < 26; i++) {
        let v = inputs[i] || 0;
        hash = ((hash << 5) - hash) + v;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

/**
 * @param strs: A list of strings
 * @return: A list of strings
 */
export function anagrams(strs) {
   let strMaps = new Map();
    for(const str of strs){
        let hash = hashCode(charMapping(str));
        if(!strMaps.get(hash)){
            strMaps.set(hash, [str]);
        }
        else{
            strMaps.get(hash).push(str);
        }
    }

    let anagramsResults = [];
    for(const values of strMaps.values()){
        if(values.length > 1) anagramsResults.push(...values);
    }
    return anagramsResults;
}