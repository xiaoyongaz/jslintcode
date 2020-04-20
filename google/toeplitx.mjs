function allSame(matrix, matrixElements){
    if(!matrixElements || matrixElements.length == 0) return true;
    let v = matrix[matrixElements[0][0]][matrixElements[0][1]];
    for(let cor of matrixElements){
        if(matrix[cor[0]][cor[1]] !== v) return false;
    }
    return true;
}

function getNext(matrixElements,colCnt){
    let results = [];
    let first = matrixElements[0];
    if(first[0]-1 >=0) results.push([first[0]-1, first[1]]);
    for(let cor of matrixElements){
        if(cor[1]+1 < colCnt) results.push([cor[0], cor[1]+1]);
    }
    return results;
}

/**
 * @param matrix: the given matrix
 * @return: True if and only if the matrix is Toeplitz
 */
export function isToeplitzMatrix (matrix) {
    if(matrix.length === 0) return true;
    let current = [[matrix.length-1, 0]];
    let colCnt = matrix[0].length;
    while(current.length>0){
        let same = allSame(matrix, current);
        if(!same) return false;
        current = getNext(current, colCnt);
    }
    return true;
}


