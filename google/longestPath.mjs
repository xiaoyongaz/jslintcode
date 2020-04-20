function numberTab(path){
    let tabCnt = 0;
    let index = 0;
    while(path[index] === "\t"){
        tabCnt++;
        index++;
    }
    return [tabCnt, path.slice(index)];
}

/**
 * @param input: an abstract file system
 * @return: return the length of the longest absolute path to file
 */
export function lengthLongestPath (input) {
    let pathSegs = input.split("\n");
    let totalPath = [pathSegs[0]];
    let longestPath = 0;
    for(let i = 1; i < pathSegs.length; i++){
        let [position, path] = numberTab(pathSegs[i]);
        totalPath[position] = path;
        let currentTotalPath = totalPath.slice(0, position+1);
        let combined = currentTotalPath.join("/");
        if(combined.length > longestPath) longestPath = combined.length;
    }
    return longestPath;
}

