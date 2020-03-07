/**
 * @param nums: A list of non negative integers
 * @return: A string
 */
//dictionary sort
//concatinate

//a b are strings or number, lenght >0
function numCompare(a, b){
    let ab = a+b;
    let ba = b+a;
    if(ab > ba) return -1;
    if(ba > ab) return 1;
    return 0;
}

export function largestNumber(nums) {
    let numStrings = nums.map(x => x.toString());
    numStrings.sort(numCompare);
    const start = '';
    const callback = (sum, element) => sum + element;
    let r = numStrings.reduce(callback, start);
    let rnn = parseInt(r);
    if(rnn === 0) return '0';
    return r;
}
