function plusHelper(head){
    if(head === null) return 1;
    let carry = plusHelper(head.next);
    let val = head.val + carry;
    if(val >=10) {
        head.val = val - 10;
        carry = 1;
    }
    else{
        head.val = val;
        carry = 0;
    }
    return carry;
}

/**
 * @param head: the first Node
 * @return: the answer after plus one
 */
export function plusOne (head) {
    let carry = plusHelper(head);
    if(carry === 0) return head;
    let newHead = new ListNode(carry);
    newHead.next = head;
    return newHead;
}


