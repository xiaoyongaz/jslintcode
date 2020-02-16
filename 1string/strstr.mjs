/*
For a given source string and a target string, you should output the first index(from 0) of 
target string in source string.
If target does not exist in source, just return -1.
Have you met this question in a real interview?  
*/
//pre: source.length - start >= target.length
function match(source, start, target){
   for(const c of target){
       if(source[start] === c){
           start++;
       }
       else {
           return false;
       }
   } 
   return true;
}

export function strstr(source, target){
    if(!source || !target) return -1;
    let start = 0;
    while( source.length - start >= target.length){
        if(match(source, start, target)) return start;
        start++;
    }
    return -1;
}