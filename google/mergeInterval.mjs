function compareNumbers(a, b) {
  if ((a[0] < b[0]) || ((a[0] === b[0])&& (a[1]<b[1]))) {
    return -1;
  } else if ((a[0] === b[0]) && (a[1]===b[1])) {
    return 0;
  } else {
    return 1;
  }
}
/**
 * @param intervals: interval list.
 * @return: A new interval list.
 */
export function merge (intervals) {
    intervals.sort(compareNumbers);
    let results = [];
    let index = 0;
    while(index < intervals.length){
        let current = intervals[index];
        //merge nexts
        let next = index+1;
        while(next < intervals.length  && intervals[next][0] <= current[1]){
            if(current[1] < intervals[next][1]) current[1] = intervals[next][1];
            next++;
        }
        results.push(current);
        index = next;
    }
    return results;
}


