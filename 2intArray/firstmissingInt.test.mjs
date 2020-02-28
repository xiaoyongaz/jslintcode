import test from 'ava';
import {strict as assert} from 'assert';
import {firstMissingPositive} from "./firstmissingInt.mjs";

test('[3,2,0] should be 1', t => {
    let result = firstMissingPositive([3,2,0]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 1, "should return 1");
});

test('[3,4,-1,1] should be 2', t => {
    let result = firstMissingPositive([3,4,-1,1]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 2, "should return 2");
});


