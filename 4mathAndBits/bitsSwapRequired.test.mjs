import test from 'ava';
import {strict as assert} from 'assert';
import {bitSwapRequired} from "./bitsSwapRequired.mjs";

test('14 and 31 should require 2 swap', t => {
    let result = bitSwapRequired(14, 31);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 2, "should return 2");
});


