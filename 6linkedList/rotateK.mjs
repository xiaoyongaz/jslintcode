/**
 * @param head: the List
 * @param k: rotate to the right k places
 * @return: the list after rotation
 */
function getLen(head){
    if(head === null) return 0;
    return 1 + getLen(head.next);
}

const rotateRight = function (head, k) {
    let len = getLen(head);
    if(len === 0) return head;
    let newHead = head;
    if(k >= len) k = k % len;
    let moveCnt = len - k -1;
    if(moveCnt === 0) return head;
    while(moveCnt > 0){
        newHead = newHead.next;
        moveCnt--;
    }
    let result = newHead.next;
    newHead.next = null;
    newHead = result;
    while(newHead !== null && newHead.next !== null){
        newHead = newHead.next;
    }
    newHead.next = head;
    return result;
}


