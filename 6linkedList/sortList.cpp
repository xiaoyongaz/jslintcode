class ListNode {
    public:
        int val;
        ListNode *next;
        ListNode(int val) {
            this->val = val;
            this->next = NULL;
        }
}

class Solution {
    public:
        //l1 and l2 are not nullptr already
        ListNode * mergeList(ListNode* l1, ListNode* l2){
            ListNode* dummyHead = new ListNode(0);
            auto head = dummyHead;
            while(l1 != nullptr && l2 != nullptr){
                if(l1->val < l2->val){
                    head->next = l1;
                    l1 = l1->next;
                }
                else {
                    head->next = l2;
                    l2 = l2->next;
                }                                    
                head = head->next;
            }
            if(l1 != nullptr) head->next = l1;
            else head->next = l2;
            return dummyHead->next;
        }

        ListNode * sortList(ListNode * head) {
            if(head == nullptr || head->next == nullptr) return head;
            auto slow = head;
            auto fast = head->next->next;
            while(fast != nullptr && fast->next != nullptr){
                slow = slow->next;
                fast = fast->next->next;
            }
            auto latter = slow->next;
            slow->next = nullptr;
            auto sorted1 = sortList(head);
            auto sorted2 = sortList(latter);
            auto sorted = mergeList(sorted1, sorted2); 
            return sorted;
        }
};
