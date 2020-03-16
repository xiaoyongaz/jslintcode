class TreeNode {
    public:
        int val;
        TreeNode *left, *right;
        TreeNode(int val) {
            this->val = val;
            this->left = this->right = nullptr;
        }
}

class Solution {
public:
    int removeLeftMax(TreeNode* pre, TreeNode* node, bool left){
        //if right is nullptr, then itself is largest, remove itself    
        if(node->right == nullptr){
            if(left) pre->left = node->left;
            else pre->right = node->left;
            auto val = node->val;
            delete node;
            return val;
        }
        pre = node;
        node = node->right;
        auto val = removeRightMin(pre, node, false);
        return val;
    }

    int removeRightMin(TreeNode* pre, TreeNode* node, bool left){
        if(node->left == nullptr){
            if(left) pre->left = node->right;
            else pre->right = node->right;
            auto val = node->val;
            delete node;
            return val;
        }
        pre = node;
        node = node->left;
        auto val = removeLeftMax(pre, node, true);
        return val;
    }

    void removeNodeHelper(TreeNode* pre, TreeNode* node, bool left){
        if(node->left == nullptr && node->right == nullptr){
            if(left) pre->left = nullptr;
            else pre->right = nullptr;
            delete node;
            return;
        }
        if(node->left != nullptr){
            auto val = removeLeftMax(node, node->left, true);
            node->val = val;
            return;
        }

        auto val = removeRightMin(node, node->right, false);
        node->val = val;
        return;
    }
            
    void removeNodeP(TreeNode* pre, TreeNode * root, int value, bool left) {
          if(root == nullptr) return;
          if(root->val == value) {
            removeNodeHelper(pre, root, left);
            return;
          }
          
          pre = root;
          if(root->val > value){
              root = root->left;
              removeNodeP(pre, root, value, true);
              return;
          }
          root = root->right;
          removeNodeP(pre, root, value, false);
          return;
    }

    TreeNode * removeNode(TreeNode * root, int value) {
        auto dummyNode = new TreeNode(0);
        dummyNode->left = root;
        removeNodeP(dummyNode, root, value, true);
        return dummyNode->left;
    }
};
