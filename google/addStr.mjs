/**
 * @param num1: a non-negative integers
 * @param num2: a non-negative integers
 * @return: return sum of num1 and num2
 */
export function addStrings (num1, num2) {
    let carry = 0;
    let i1 = num1.length-1;
    let i2 = num2.length-1;
    let results = [];
    while(i1 >=0 && i2 >=0){
        let d1 = num1[i1] - '0';
        let d2 = num2[i2] - '0';
        let b = d1 + d2 + carry;
        if(b >= 10) {
            b =  b - 10;
            carry = 1;
        }
        else carry = 0;
        results.push(b);
        i1--;
        i2--;
    }

    while(i1>=0){
        let d1 = num1[i1] - '0';
        let b = d1 + carry;
        if(b >= 10){
            b = b -10;
            carry = 1;
        }
        else carry = 0;
        results.push(b);
        i1--;
    }

    while(i2>=0){
        let d2 = num2[i2] - '0';
        let b = d2 + carry;
        if(b >= 10){
            b = b -10;
            carry = 1;
        }
        else carry = 0;
        results.push(b);
        i2--;
    }

    if(carry === 1) results.push(carry);

    results.reverse();
    return results.join('');
}


