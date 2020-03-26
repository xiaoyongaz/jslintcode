import test from 'ava';
import {strict as assert} from 'assert';
import {minDistance} from "./minDistance.mjs";

test('horse and ros should be 3', t => {
    let result = minDistance("horse", "ros");
    console.log(`result is ${result}`);
    assert.deepEqual(result, 3, "should return 3");
});


