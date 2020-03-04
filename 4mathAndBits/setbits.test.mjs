import test from 'ava';
import {strict as assert} from 'assert';
import {updateBits} from "./setbits.mjs";

/*Input: N=(10000000000)2 M=(11111)2 i=2 j=6
Output: N=(10001111100)2
Challenge
Minimum number of operations?
*/ 
test('10000000000 10101 2, 6 should be 10001010100', t => {
    let result = updateBits( 0b10000000000, 0b10101, 2, 6);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 0b10001010100, "should return 0b10001010100");
});
