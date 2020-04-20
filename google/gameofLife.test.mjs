import test from 'ava';
import {strict as assert} from 'assert';
import {gameOfLife} from "./gameofLife.mjs";

test('[[1,3]] should return [[1,3]]', t => {
    let result = gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, [[0,0,0], [1,0,1], [0,1,1],[0,1,0]], "[(1,3),(2,6),(8,10),(15,18)] should return [[1,6], [8,10], [15,18]]");
});



