import test from 'ava';
import {strict as assert} from 'assert';
import {DeleteDigits} from "./deleteDigits.mjs";

test('178542 and 4 should be 12', t => {
    let result = DeleteDigits("178542", 4);
    console.log(`result is ${result}`);
    assert.deepEqual(result, '12', "should return 12");
});

test('568431 and 3 should be 431', t => {
    let result = DeleteDigits("568431", 3);
    console.log(`result is ${result}`);
    assert.deepEqual(result, '431', "should return 431");
});

test('90249 and 2 should be 24', t => {
    let result = DeleteDigits("90249", 2);
    console.log(`result is ${result}`);
    assert.deepEqual(result, '24', "should return 24");
});

test('254193 and 1 should be 24193', t => {
    let result = DeleteDigits("254193", 1);
    console.log(`result is ${result}`);
    assert.deepEqual(result, '24193', "should return 24193");
});

