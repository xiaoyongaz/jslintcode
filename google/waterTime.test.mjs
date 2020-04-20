import test from 'ava';
import {strict as assert} from 'assert';
import {timeToFlowerTree} from "./waterTime.mjs";

test('[-1,0,0] [-1,3,5] should return 5', t => {
    let result = timeToFlowerTree([-1,0,0], [-1,3,5]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 5, "should return 5");
});


