/*Input:gas[i]=[1,1,3,1],cost[i]=[2,2,1,1]
Output:2
Example 2:

Input:gas[i]=[1,1,3,1],cost[i]=[2,2,10,1]
Output:-1
*/
import test from 'ava';
import {strict as assert} from 'assert';
import {canCompleteCircuit} from "./gasStations.mjs";

test('[1,1,3,1] [2,2,1,1] should be 2', t => {
    let result = canCompleteCircuit([1,1,3,1], [2, 2, 1,1]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, 2, "should return 2");
});

test('[1,1,3,1] [2,2,10,1] should be -1', t => {
    let result = canCompleteCircuit([1,1,3,1], [2, 2, 10,1]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, -1, "should return -1");
});

test('[4] [5] should be -1', t => {
    let result = canCompleteCircuit([4], [5]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, -1, "should return -1");
});

test('[2,4] [3,4] should be -1', t => {
    let result = canCompleteCircuit([2,4], [3,4]);
    console.log(`result is ${result}`);
    assert.deepEqual(result, -1, "should return -1");
});


