import test from 'ava';
import {strict as assert} from 'assert';
import {strstr} from "./strstr.mjs";

/*
Input: source = "source" ，target = "target"
Output: -1	
Explanation: If the source does not contain the target content, return - 1.
Example 2:
Input:source = "abcdabcdefg" ，target = "bcd"
Output: 1	
E
*/

test('source and target should return -1', t => {
    let result = strstr('source', 'target');
    console.log(`result is ${result}`);
    assert.deepEqual(result, -1, "should return ");
});

test('abcdabcdefg and bcd should return 1', t => {
    let result = strstr('abcdabcdefg', 'bcd');
    console.log(`result is ${result}`);
    assert.deepEqual(result, 1, "should return -1");
});

