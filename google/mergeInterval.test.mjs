import test from 'ava';
import {strict as assert} from 'assert';
import {merge} from "./mergeInterval.mjs";

test('[[1,3]] should return [[1,3]]', t => {
    let result = merge([[1,3],[2,6],[8,10],[15,18]]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, [[1,6], [8,10], [15,18]], "[(1,3),(2,6),(8,10),(15,18)] should return [[1,6], [8,10], [15,18]]");
});



