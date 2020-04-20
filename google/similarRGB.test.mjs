//"#09f166"
import test from 'ava';
import {strict as assert} from 'assert';
import {similarRGB} from "./similarRGB.mjs";

test('"#09f166" should return #11ee66', t => {
    let result = similarRGB("#09f166");
    console.log(`result is ${result}`);
    assert.deepEqual(result, '#11ee66', "#09f166 return #11ee66");
});



