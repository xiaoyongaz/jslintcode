import test from 'ava';
import {strict as assert} from 'assert';
import {trailingZeros} from "./trailing0Fac.mjs";

test('11 should be 2', t => {
    let result = trailingZeros(11);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 2, "should return 2");
});

test('105 should be 25', t => {
    let result = trailingZeros(105);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 25, "should return 25");
});

//5, 10, 15, 20, 25, 30, 25, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105
//1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1


