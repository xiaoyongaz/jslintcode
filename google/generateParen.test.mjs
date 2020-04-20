import test from 'ava';
import {strict as assert} from 'assert';
import {generateParenthesis} from "./generateParen.mjs";

test('[[1,3]] should return [[1,3]]', t => {
    let result = generateParenthesis(3);
    console.log(`result is ${result}`);
    assert.deepEqual(result, ["((()))", "(())()", "()(())", "()()()"], "3 should return different");
});


