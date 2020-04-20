function goodNumberPosition(value, position){
    let remainder1 = value % position;
    let remainder2 = position % value;
    return remainder1 === 0 || remainder2 === 0;
}

function countHelper(N, currentSet, collector){
    if(currentSet.length === N) 
    {
        collector.push([...currentSet]);
        return;
    }

    for(let i = 1; i <=N; i++){
        if(currentSet.find(x=> x === i) === undefined  && goodNumberPosition(i, currentSet.length+1)){
            currentSet.push(i);
            countHelper(N, currentSet, collector);
            currentSet.pop();
        }
    }
}

/**
 * @param N: The number of integers
 * @return: The number of beautiful arrangements you can construct
 */
export function countArrangement (N) {
    let currentSet = [];
    let collector = [];
    countHelper(N, currentSet, collector);
    return collector.length;
}


