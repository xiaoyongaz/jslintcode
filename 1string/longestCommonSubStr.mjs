/*
Given two strings, find the longest common substring.
Return the length of it.
The characters in substring should occur continuously in original string. This is different with subsequence.
Example 1:
	Input:  "ABCD" and "CBCE"
	Output:  2
	Longest common substring is "BC"
Example 2:
	Input: "ABCD" and "EACB"
	Output:  1
	Longest common substring is 'A' or 'C' or 'B'
Challenge
O(n x m) time and memory.
*/
function startWithHelper(str1, str2, index1, index2, startLength){
	if(startLength[index1][index2] !== undefined) {
		return startLength[index1][index2];
	}

	if(str1[index1] === str2[index2]){
		let newLength = 1 + startWithHelper(str1, str2, index1+1, index2+1, startLength);
		startLength[index1][index2] = newLength; 
		return newLength;
	}

	startLength[index1][index2] = 0;
	return 0;
}

function longestHelper(str1, str2, index1, index2, savedLength, startLength){
	if(savedLength[index1][index2] !== undefined) {
		return savedLength[index1][index2];
	}

	let l0 = 0;
	if(str1[index1] === str2[index2]){
		l0 = 1 + startWithHelper(str1, str2, index1+1, index2+1, startLength);
		startLength[index1][index2] = l0;
	}
	else{
		startLength[index1][index2] = 0;
	}

	let l1 = longestHelper(str1, str2, index1+1, index2, savedLength, startLength);
	let l2 = longestHelper(str1, str2, index1, index2+1, savedLength, startLength);
	let l3 = longestHelper(str1, str2, index1+1, index2+1, savedLength, startLength);

	savedLength[index1][index2] = Math.max(l0, l1, l2, l3);
	return savedLength[index1][index2];
}

export function longestCommonSubStr(str1, str2){
	let savedLength = new Array(str1.length+1);
	let startLength = new Array(str1.length+1);
	for(let i = 0; i < str1.length+1; i++){
		savedLength[i] = new Array(str2.length+1);
		savedLength[i][str2.length] = 0;
		startLength[i] = new Array(str2.length+1);
		startLength[i][str2.length] = 0;
		}

	for(let i = 0; i < str2.length+1; i++){
		savedLength[str1.length][i] = 0;
		startLength[str1.length][i] = 0;
	}

	let r = longestHelper(str1, str2, 0, 0, savedLength, startLength);
	
	return r;
}