/*
Description
中文
English
Given k strings, find the longest common prefix (LCP).

Have you met this question in a real interview?  
Example
Example 1:
	Input:  "ABCD", "ABEF", "ACEF"
	Output:  "A"
	

Example 2:
	Input: "ABCDEFG", "ABCEFG" and "ABCEFA"
	Output:  "ABC"

*/
/**
 * @param strs: A list of strings
 * @return: The longest common prefix
 */
export const longestCommonPrefix = function (strs) {
	// write your code here
	//pre: longest at 0
	//loop invariant: 
	// 1)longest < str.length for all
	// 2)str[longest] is same for all
	// loop change: longest++
	// return longest
	let longest = 0;
	console.log(strs);
	console.log(strs.length);
	if(strs.length === 0) return '';
	if(strs.length === 1) return strs[0];
	let first = strs[0];
	const [, ...newStrs] = strs;
	while(longest < first.length){
		for (const str of newStrs) {
			if(str.length <= longest || str[longest] !== first[longest]) return first.slice(0, longest);
		}
		longest++;
	}
	return first.slice(0,longest);
}
