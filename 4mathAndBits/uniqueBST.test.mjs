import test from 'ava';
import {strict as assert} from 'assert';
import {numTreesfunction} from "./uniqueBST.mjs";

test('3 should be 5', t => {
    let result = numTreesfunction(3);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 5, "should return 5");
});

test('1 should be 1', t => {
    let result = numTreesfunction(1);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 1, "should return 1");
});

test('2 should be 2', t => {
    let result = numTreesfunction(2);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 2, "should return 2");
});

test('4 should be 14', t => {
    let result = numTreesfunction(4);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 14, "should return 14");
});



