import test from 'ava';
import {strict as assert} from 'assert';
import {containsStr} from "./comparestring.mjs";

test('ABCD should contains ACD', t => {
    let result = containsStr('ABCD', 'ACD');
    console.log(`result is ${result}`);
    assert.deepEqual(result, true, "should return true");
});

test('ABCD should not contains AABC', t => {
    let result = containsStr('ABCD', 'AABC');
    console.log(`result is ${result}`);
    assert.deepEqual(result, false, "should return false");
});


//For A = "ABCD", B = "AABC", return false.