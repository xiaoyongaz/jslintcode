//startLargestMap return largest area start from startIndex and it length and a min height in the lenght, 
//so we can calculate min height of that area
function rectHelper(height, startIndex, startLargestMap, overallLargestMap){
    if(startIndex === height.length-1){
        overallLargestMap[startIndex] = height[startIndex];
        startLargestMap[startIndex] = [height[startIndex]];//lenght 1, area is height[startIndex]
        return overallLargestMap[startIndex];
    }

    let preMax = rectHelper(height, startIndex+1, startLargestMap, overallLargestMap);
    startLargestMap[startIndex] = [height[startIndex]];
    for(let i = startIndex+1; i < height.length; i++){
        let len = i - startIndex;
        let minHeight = Math.min(startLargestMap[startIndex+1][len-1]/len, height[startIndex]);
        startLargestMap[startIndex].push(minHeight * (len+1)); 
    }
    
    let max = Math.max(preMax, ...startLargestMap[startIndex]);
    overallLargestMap[startIndex] = max;
    return max;
}

function rectHelperIter(height){
    let overallLargest = height[height.length-1];
    let startLargestMapPre = [height[height.length-1]];
    for(let startIndex = height.length - 1; startIndex >=0; startIndex--){
        let startLargestMap = [height[startIndex]];
        for(let i = startIndex+1; i < height.length; i++){
            let len = i - startIndex;
            let minHeight = Math.min(startLargestMapPre[len-1]/len, height[startIndex]);
            startLargestMap.push(minHeight * (len+1)); 
        }

        overallLargest = Math.max(overallLargest, ...startLargestMap);
        startLargestMapPre = startLargestMap;
    }

    return overallLargest; 
}


/**
 * @param height: A list of integer
 * @return: The area of largest rectangle in the histogram
 */
export function largestRectangleArea (height) {
    let startLargestMap = [];
    let overallLargestMap = [];
    //let max = rectHelper(height, 0, startLargestMap, overallLargestMap);
    let max = rectHelperIter(height);
    return max;
}

//test('[2,1,5,6,2,3] should contains 10', t => {
