/**
 * @param head: n
 * @return: The new head of reversed linked list.
 */
const reverse = function (head) {
    if(head === null || head.next === null) return head;
    let next = head.next;
    let newHead = reverse(head.next);
    next.next = head;
    head.next = null;
    return newHead;
}

