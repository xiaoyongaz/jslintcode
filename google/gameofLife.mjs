function numLiveNeibors(board, i, j, width, height){
    let cnt = 0;
    if(i-1 >=0 && j-1>=0) cnt += board[i-1][j-1];
    if(i-1 >=0) cnt += board[i-1][j];
    if(i-1 >=0 && j+1 < width) cnt += board[i-1][j+1];
    if(j-1>=0) cnt += board[i][j-1];
    if(j+1<width) cnt += board[i][j+1];
    if(i+1 <height && j-1 >=0) cnt += board[i+1][j-1];
    if(i+1 < height) cnt += board[i+1][j];
    if(i+1 < height && j+1 < width) cnt +=board[i+1][j+1];
    return cnt;
}

//version 1, with new board
/**
 * @param board: the given board
 * @return: 
 */
export function gameOfLife (board) {
    if(board.length === 0) return board;
    let width = board[0].length;
    let height = board.length;
    let result = [];
    for(let r of board){
        result.push([...r]); 
    }
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            let livesAround = numLiveNeibors(board, i, j, width, height);
            if(livesAround < 2 || livesAround >3) result[i][j] = 0;
            if(livesAround ===3) result[i][j] = 1;
        }
    }
    return result;
}
