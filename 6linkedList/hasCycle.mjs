/**
 * @param head: The first node of linked list.
 * @return: True if it has a cycle, or false
 */
const hasCycle = function (head) {
    if(head === null || head.next === null) return false;
    let faster = head.next.next;
    while(faster !== null && faster !==head){
        if(faster.next === null) return false;
        faster = faster.next.next;
        head = head.next;
    }
    if(faster === null) return false;
    return true;
}

