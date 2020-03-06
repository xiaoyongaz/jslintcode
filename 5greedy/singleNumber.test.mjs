import test from 'ava';
import {strict as assert} from 'assert';
import {singleNumber} from "./singleNumber.mjs";

test('[1,1,2,2,3,4,4] should be 3', t => {
    let result = singleNumber([1,1,2,2,3,4,4]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 3, "should return 3");
});


