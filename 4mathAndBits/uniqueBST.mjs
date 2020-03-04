/**
 * @param n: An integer
 * @return: An integer
Given n, how many structurally unique BSTs (binary search trees) that store values 1...n?
Input:n = 3,
Output: 5
    */
function catalanHelper(n, nMaps){
    if(nMaps[n]) return nMaps[n];

    let c = 0;
    for(let i = 0; i < n; i++){
        c += catalanHelper(i, nMaps)*catalanHelper(n-i-1, nMaps);
    }
    nMaps[n] = c;
    return c;
}

export function numTreesfunction (n) {
    let nMaps = new Array(n+1);
    nMaps[0] = 1;
    let r = catalanHelper(n, nMaps);
    return r;
}


