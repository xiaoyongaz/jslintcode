/**
 * @param gas: An array of integers
 * @param cost: An array of integers
 * @return: An integer
 */
// from start i, if gas_tank + gas[i] - cost[i] > 0, it can continue
// if (i+1) mode length == end, return initial start, 
// else find next start point, if all tried, return impossible

//return start if it can, otherwise the first failed position
function canComleteHelper(gas, cost, start){
    let len = gas.length;
    let next = (start + 1) % len;
    let totalGas = gas[start] - cost[start];
    while(totalGas >= 0 && next != start){
        totalGas = totalGas + gas[next] - cost[next];
        next = (next + 1 ) % len;
    }
    return [next, totalGas];
}

export function canCompleteCircuit(gas, cost) {
    if(gas.length == 0) return -1;
    if(gas.length === 1) return gas[0] > cost[0] ? 0: -1;
    let start = 0;
    let totalGas = 0;
    let end = 0;
    [end, totalGas] = canComleteHelper(gas, cost, start);
    while(end > start){
        start = end;
        [end, totalGas] = canComleteHelper(gas, cost, start);
    }
    return start === end && totalGas >=0 ? start : -1;
}


