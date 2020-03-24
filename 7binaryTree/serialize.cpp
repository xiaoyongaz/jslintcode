#include <vector>
#include <unordered_map>
#include <algorithm>
#include <iostream>
#include <string>
#include <sstream>
#include <cstring>
#include <cstdlib>

using namespace std;

class TreeNode {
    public:
        int val;
        TreeNode *left, *right;
        TreeNode(int val) {
            this->val = val;
            this->left = this->right = NULL;
        }
};

class Solution {
public:
    string serialize(TreeNode * root) {
        //serialize preorder, output # as nullptr
        stringbuf buffer;
        ostream os (&buffer);
        if(root == nullptr){
           os << "#"; 
           return buffer.str();
        }

        os << root->val << ",";
          
        os << serialize(root->left) << ",";
        os << serialize(root->right); 
        return buffer.str();
    }

    void deserHelper(TreeNode*& root, vector<char*> & values, int& index){
        if(index >= values.size() || strcmp(values[index], "#") == 0) {
            root = nullptr;
            index++;
            return ;
        }
        char* pEnd; 
        root = new TreeNode(strtol(values[index], &pEnd, 10));
        index++;
        deserHelper(root->left, values, index);
        deserHelper(root->right, values, index);
    }
    
    TreeNode * deserialize(string &data) {
        if(data.size() < 2) return nullptr;
        vector<char*> values;
        char * cstr = new char [data.size()+1];
        strcpy (cstr, data.c_str());
        char * p = std::strtok (cstr,",");
        while (p!=nullptr)
        {
            values.push_back(p);
            p = std::strtok(nullptr,",");
        }
        TreeNode* root; 
        int index = 0;
        deserHelper(root, values, index);
        return root;
    }
};

int main(){
    Solution sol;
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->left->left = nullptr;
    root->left->right = nullptr;
    root->right = new TreeNode(3);
    root->right->left = new TreeNode(4);
    root->right->right = new TreeNode(5);
    auto s = sol.serialize(root);
    cout << "serialize result is " << s << endl;
    auto r = sol.deserialize(s);
    auto rs = sol.serialize(r);
    cout << "reserialize result is " << rs << endl;
    return 0;
}
    
