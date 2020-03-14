/**
 * @param head: The first node of linked list
 * @param x: An integer
 * @return: A ListNode
 */
export function partition (head, x) {
    if(head === null || head.next === null) return head;
    let dummyLeft = new ListNode(0);
    let dummyRight = new ListNode(0);
    let leftPre = dummyLeft;
    let rightPre = dummyRight;
    while(head !== null){
        if(head.val < x){
            leftPre.next = head;
            leftPre = leftPre.next;
        }else 
        {
            rightPre.next = head;
            rightPre = rightPre.next;
        }
        head = head.next;
    }
    leftPre.next = dummyRight.next;;
    rightPre.next = null;
    return dummyLeft.next;
}


