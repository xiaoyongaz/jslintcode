import test from 'ava';
import {strict as assert} from 'assert';
import {findMaxConsecutiveOnes} from "./cnt1s.mjs";

test('[1,1,0,1,1,1] should contains 3', t => {
    let result = findMaxConsecutiveOnes([1,1,0,1,1,1]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 3, "[1,1,0,1,1,1] return 3");
});
