import test from 'ava';
import {strict as assert} from 'assert';
import {ratJump} from "./ratJmp.mjs";

test('[0,0,0] should contains 5', t => {
    let result = ratJump([0,0,0]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 5, "[0,0,0] return 5");
});


test('[0,0,1,0] should contains 3', t => {
    let result = ratJump([0,0,1,0]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 3, "[0,0,1,0] return 5");
});


