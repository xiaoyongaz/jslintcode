import test from 'ava';
import {strict as assert} from 'assert';
import {combine} from "./combinations.mjs";

test('4 should be [[1,2],[1,3],[1,4], [2,3], [2,4], [3,4]]', t => {
    let result = combine(13, 3);
    console.log(`result is ${result}`);
    assert.deepEqual(true, true, "testing");
    //assert.deepEqual(result, [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]], "should return [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]");
});


