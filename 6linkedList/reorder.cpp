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
    /**
     * @param head: The head of linked list.
     * @return: nothing
     */
    void reorderList(ListNode * head) {
        if(head == nullptr || head->next == nullptr) return head;
        vector<ListNode*> nodes;
        auto iter = head;
        while(iter != nullptr) {
            nodes.push_back(iter);
            iter = iter->next;
        }
        auto l = 0;
        auto r = nodes.size() - 1;
        while(l < r){
            nodes[r]->next = nodes[l]->next;
            nodes[l]->next = nodes[r];
            l++; 
            r--;
        }
        nodes[l]->next = nullptr;
    }
};
