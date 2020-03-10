function lenHelper(head){
    let len = 0;
    while(head != null) {
        len++;
        head = head.next;
    }
    return len;
}

/**
 * @param head: The first node of linked list.
 * @param n: An integer
 * @return: The head of linked list.
 */
export function removeNthFromEnd (head, n) {
    if(head === null || (head.next === null && n ===1)) return null;
    let len = lenHelper(head);
    if(len === n) return head.next;
    let savedHead = head;
    let pre = head;
    while(len > n + 1){
        pre = head;
        head = head.next;
        len--;
    }
    pre.next = head.next.next; 
    return savedHead;
}


