import test from 'ava';
import {strict as assert} from 'assert';
import {largestRectangleArea} from "./maxArea.mjs";

test('[2,1,5,6,2,3] should contains 10', t => {
    let result = largestRectangleArea([2,1,5,6,2,3]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 10, "should return 10");
});


