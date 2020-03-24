#include <vector>
#include <unordered_map>
#include <algorithm>
#include <iostream>
#include <string>
#include <sstream>
#include <cstring>
#include <cstdlib>

using namespace std;

class Solution {
public:
    void subsetsHelper(vector<int>& nums, vector<int>& current, int index, vector<vector<int>>& collector){
        if(index >= nums.size()) {
            vector<int>* copy = new vector<int>(current);
            collector.push_back(*copy);
            return;
        }

        current.push_back(nums[index]);
        subsetsHelper(nums, current, index+1, collector);
        current.pop_back();
        subsetsHelper(nums, current, index+1, collector);
        return;
    }
    /**
     * @param nums: A set of numbers
     * @return: A list of lists
     */
    vector<vector<int>> subsets(vector<int> &nums) {
        vector<vector<int>> results;
        vector<int> current;
        subsetsHelper(nums, current, 0, results);
        return results;
    }
};

int main(){
    vector<int> nums{1,2,3};
    Solution sol;
    auto r = sol.subsets(nums);
    for(auto s: r){
        cout << "[";
        for(auto i : s){
            cout << i << " ";
        }
        cout << "]" << endl;
    }
}
