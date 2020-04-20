import test from 'ava';
import {strict as assert} from 'assert';
import {backPack} from "./backpack.mjs";

test('max pack of [3,4,8,5] and 10 should be 9', t => {
    let result = backPack(10,[3,4,8,5]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 9, "should return 9");
});


