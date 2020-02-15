/*Description
中文
English
Compare two strings A and B, determine whether A contains all of the characters in B.

The characters in string A and B are all Upper Case letters.

The characters of B in A are not necessary continuous or ordered.

Have you met this question in a real interview?  
Example
For A = "ABCD", B = "ACD", return true.

For A = "ABCD", B = "AABC", return false.

Related Problems
*/

export function containsStr(A, B){
    let aMapping = new Map();
    for(const c of A){
        let cnt = aMapping.get(c) || 0;
        aMapping.set(c, cnt + 1);
    }

    for(const c of B){
        let cnt = aMapping.get(c) || 0;
        if( cnt == 0) return false;
        aMapping.set(c, cnt - 1);
    }

    return true;
}