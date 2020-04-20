import test from 'ava';
import {strict as assert} from 'assert';
import {findMinHeightTrees} from "./minHeightTree.mjs";

test('[[1,3]] should return [[1,3]]', t => {
    let result = findMinHeightTrees(4,[[1,0],[1,2],[1,3]] );
    console.log(`result is ${result}`);
    assert.deepEqual(result, [1], "3 should return different");
});


