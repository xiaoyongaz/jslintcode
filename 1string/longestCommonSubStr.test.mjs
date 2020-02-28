import test from 'ava';
import {strict as assert} from 'assert';
import {longestCommonSubStr} from "./longestCommonSubStr.mjs";

test('ABCD, CBCE lcs is 2', t => {
    let result = longestCommonSubStr('ABCD', 'CBCE');
    console.log(`result is ${result}`);
    assert.deepEqual(result, 2, "should return 2");
});

test('ABCD, EACB lcs is 1', t => {
    let result = longestCommonSubStr('ABCD', 'EACB');
    console.log(`result is ${result}`);
    assert.deepEqual(result, 1, "should return 1");
});

test('bbcdd , bcdd lcs is 4', t => {
    let result = longestCommonSubStr('bbcdd', 'bcdd');
    console.log(`result is ${result}`);
    assert.deepEqual(result, 4, "should return 4");
});

test('aaaaaaaaaaaabbbbbcdd , abcdd lcs is 4', t => {
    let result = longestCommonSubStr('aaaaaaaaaaaabbbbbcdd', 'abcdd');
    console.log(`result is ${result}`);
    assert.deepEqual(result, 4, "should return 4");
});

//test('"www.lintcode.com code", "www.ninechapter.com code" lcs is 9', t => {
test('"www.l.com code", "www.nn.com code" lcs is 9', t => {
    //let result = longestCommonSubStr('www.lintcode.com code', 'www.ninechapter.com code');
    let result = longestCommonSubStr('www.lintcode.com code', 'www.ninechapter.com code');
    console.log(`result is ${result}`);
    assert.deepEqual(result, 9, "should return 9");
});