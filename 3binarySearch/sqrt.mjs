/**
 * @param x: An integer
return the largest integer y that y*y <= x.
first the range l, h, 
get m = (l+h)/2, if m*m ==x, return m, if  m*m < x, new range = m, h, if m*m > x, new range = l, m -1

 * @return: The sqrt of x
 */



export function sqrt(x) {
    if(x == 0 || x == 1) return x;
    if(x == 2) return 1;
    let l = 1;
    let h = x;
    //loop invariant: 
    while(l < h){
        let m = Math.floor((l + h)/2);
        if( m*m == x) return m;
        if( m*m < x) {
            if((m+1)*(m+1) > x) return m;
            l = m+1;
        }else {
            h = m -1;
        }
    }
    return l;
}


