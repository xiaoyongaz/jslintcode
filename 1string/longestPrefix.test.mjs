import test from 'ava';
import {strict as assert} from 'assert';
import {longestCommonPrefix } from "./longestPrefix.mjs";

	
test('ABCD, ABEF, ACEF lcp is A', t => {
    let result = longestCommonPrefix(['ABCD', 'ABEF', 'ACEF']);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 'A', "should return A");
});

test('ABCDEFG, ABCEFG, ABCEFA lcp is ABC', t => {
    let result = longestCommonPrefix(['ABCDEFG', 'ABCEFG', 'ABCEFA']);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 'ABC', "should return ABC");
});
