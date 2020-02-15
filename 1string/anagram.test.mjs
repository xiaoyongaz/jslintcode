import test from 'ava';
import {strict as assert} from 'assert';
import {anagram} from "./anagram.mjs";

test('ab and bs should be anagram', t => {
    let result = anagram('ab', 'ba');
    console.log(`result is ${result}`);
    assert.deepEqual(result, true, "should return true");
});

test('abcd and dcba should be anagram', t => {
    let result = anagram('abcd', 'dcba');
    console.log(`result is ${result}`);
    assert.deepEqual(result, true, "should return true");
});

test('ac and ab should not be anagram', t => {
    let result = anagram('ac', 'ab');
    console.log(`result is ${result}`);
    assert.deepEqual(result, false, "should return false");
});
