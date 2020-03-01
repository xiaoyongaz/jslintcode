/*
[1,3,5,6], 0 → 0
*/
import test from 'ava';
import {strict as assert} from 'assert';
import {searchInsert} from "./searchInsert.mjs";


test('[1,3,5,7] and 5 should be 2', t => {
    let result = searchInsert([1,3,5,7], 5);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 2, "should return 2");
});


test('[1,3,5,7] and 2 should be 1', t => {
    let result = searchInsert([1,3,5,7], 2);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 1, "should return 1");
});

test('[1,3,5,6] and 7 should be 4', t => {
    let result = searchInsert([1,3,5,6], 7);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 4, "should return 4");
});

test('[1,3,5,6] and 0 should be 0', t => {
    let result = searchInsert([1,3,5,6], 0);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 0, "should return 0");
});


