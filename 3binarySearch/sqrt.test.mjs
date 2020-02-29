import test from 'ava';
import {strict as assert} from 'assert';
import {sqrt} from "./sqrt.mjs";

test('0 should be 0', t => {
    let result = sqrt(0);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 0, "should return 0");
});

test('1 should be 1', t => {
    let result = sqrt(1);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 1, "should return 1");
});

test('2 should be 1', t => {
    let result = sqrt(2);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 1, "should return 1");
});

test('3 should be 1', t => {
    let result = sqrt(3);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 1, "should return 1");
});

test('4 should be 2', t => {
    let result = sqrt(4);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 2, "should return 2");
});

test('5 should be 2', t => {
    let result = sqrt(5);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 2, "should return 2");
});

test('6 should be 2', t => {
    let result = sqrt(6);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 2, "should return 2");
});

test('7 should be 2', t => {
    let result = sqrt(7);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 2, "should return 2");
});

test('8 should be 2', t => {
    let result = sqrt(8);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 2, "should return 2");
});

test('9 should be 3', t => {
    let result = sqrt(9);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 3, "should return 3");
});

test('10 should be 3', t => {
    let result = sqrt(10);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 3, "should return 3");
});

test('11 should be 3', t => {
    let result = sqrt(11);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 3, "should return 3");
});


