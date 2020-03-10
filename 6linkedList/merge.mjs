/**
 * @param l1: ListNode l1 is the head of the linked list
 * @param l2: ListNode l2 is the head of the linked list
 * @return: ListNode head of linked list
 */
const mergeTwoLists = function (l1, l2) {
    if(l1 === null || l2 ===null) return l1 === null? l2 : l1;
    let savedHead = null;
    if(l1.val < l2.val){
        savedHead = l1; 
        l1 = l1.next;
    }else {
        savedHead =l2;
        l2 = l2.next;
    }

    let current = savedHead;
    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            current.next = l1;
            l1 = l1.next;
        }
        else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    if(l1 != null) current.next = l1;
    else current.next = l2;
    return savedHead;
}


