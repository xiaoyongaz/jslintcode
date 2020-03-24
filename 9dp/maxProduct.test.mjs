import test from 'ava';
import {strict as assert} from 'assert';
import {maxProduct} from "./maxProduct.mjs";

test('max product of [2,3,-2,4] should be 6', t => {
    let result = maxProduct([2,3,-2,4]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 6, "should return 6");
});

test('max product of [-1,2,4,1] should be 8', t => {
    let result = maxProduct([-1,2,4,1]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 8, "should return 8");
});

test('max product of [-3,0,1,-2] should be 1', t => {
    let result = maxProduct([-3,0,1,-2]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 1, "should return 1");
});
