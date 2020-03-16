import test from 'ava';
import {strict as assert} from 'assert';
import {searchRange} from "./searchRange.mjs";

test(' should be 2', t => {
    let result = searchRange([1,1,3,1], [2, 2, 1,1]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 2, "should return 2");
});


