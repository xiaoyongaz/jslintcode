class TreeNode {
    public:
        int val;
        TreeNode *left, *right;
        TreeNode(int val) {
            this->val = val;
            this->left = this->right = NULL;
        }
}

class Solution {
    public:
        TreeNode* buildHelper(vector<int> &preorder, int preStart, int preEnd, 
                vector<int> &inorder, int inStart, int inEnd) {
            if(preStart > preEnd) return nullptr;
            if(preStart == preEnd){
                return new TreeNode(preorder[preStart]);
            }
            auto rootVal = preorder[preStart];
            auto root = new TreeNode(rootVal);
            auto inIndex = inStart;
            while(inIndex <= inEnd && inorder[inIndex] != rootVal) inIndex++;
            auto newInEnd1 = inIndex-1;
            auto newInStart2 = inIndex+1;
            auto newPreStart1 = preStart+1;
            auto newPreEnd1 = newPreStart1 + (newInEnd1 - inStart);
            auto newPreStart2 = newPreEnd1+1;
            auto left = buildHelper(preorder, newPreStart1, newPreEnd1, inorder, inStart, newInEnd1);
            auto right = buildHelper(preorder, newPreStart2, preEnd, inorder, newInStart2, inEnd);
            root->left = left;
            root->right = right;
            return root;
        }

        TreeNode * buildTree(vector<int> &preorder, vector<int> &inorder) {
            auto result = buildHelper(preorder, 0, preorder.size()-1, inorder, 0, inorder.size()-1);
            return result;            
        }
};
