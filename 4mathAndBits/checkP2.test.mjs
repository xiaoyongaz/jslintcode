import test from 'ava';
import {strict as assert} from 'assert';
import {checkPowerOf2} from "./checkP2.mjs";

test('0 should be false', t => {
    let result = checkPowerOf2(0);
    console.log(`result is ${result}`);
    assert.deepEqual(result, false, "should return false");
});

test('1 should be true', t => {
    let result = checkPowerOf2(1);
    console.log(`result is ${result}`);
    assert.deepEqual(result, true, "should return true");
});

test('2 should be true', t => {
    let result = checkPowerOf2(2);
    console.log(`result is ${result}`);
    assert.deepEqual(result, true, "should return true");
});

test('8 should be true', t => {
    let result = checkPowerOf2(8);
    console.log(`result is ${result}`);
    assert.deepEqual(result, true, "should return true");
});

test('9 should be false', t => {
    let result = checkPowerOf2(9);
    console.log(`result is ${result}`);
    assert.deepEqual(result, false, "should return false");
});



