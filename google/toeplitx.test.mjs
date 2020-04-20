import test from 'ava';
import {strict as assert} from 'assert';
import {isToeplitzMatrix} from "./toeplitx.mjs";

test('[[1,2,3,4],[5,1,2,3],[9,5,1,2]] should contains true', t => {
    let result = isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, true, "[[1,2,3,4],[5,1,2,3],[9,5,1,2]] return true");
});



