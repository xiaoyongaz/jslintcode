import test from 'ava';
import {strict as assert} from 'assert';
import {largestNumber} from "./largestNum.mjs";

test('[1,20,23,4,8] should be 8423301', t => {
    let result = largestNumber([1,20,23,4,8]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, '8423201', "should return 8423201");
});

test('[4,6,65] should be 6654', t => {
    let result = largestNumber([4,6,65]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, '6654', "should return 6654");
});

test('[0,0] should be 0', t => {
    let result = largestNumber([0,0]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, '0', "should return 0");
});

