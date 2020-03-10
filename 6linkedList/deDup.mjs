/**
 * @param head: head is the head of the linked list
 * @return: head of linked list
 */
const deleteDuplicates = function (head) {
    if(head === null || head.next === null) return head;
    let saveHead = head;
    let next = head.next;
    while(head !== null){
        while(next !== null && next.val === head.val){
            next = next.next;
        }
        head.next = next;
        head = next;
        if(next !== null) next = next.next;
    }
    return saveHead;
}

