#include <vector>
#include <unordered_map>
#include <algorithm>
#include <iostream>
#include <string>
#include <sstream>
#include <cstring>
#include <cstdlib>
#include <unordered_set>
#include <climits>

using namespace std;

class Solution {
public:
 
    void subsetHelper(vector<int> & nums, int start, vector<int>& current, vector<vector<int>>& collector){
        auto clone = new vector<int>(current);
        collector.push_back(*clone);
        
        for(auto i = start; i< nums.size(); i++){
            if(i != start && nums[i] == nums[i-1]) continue;
            current.push_back(nums[i]);
            subsetHelper(nums, i+1, current, collector);
            current.pop_back();
        }
    }
    /**
     * @param nums: A set of numbers.
     * @return: A list of lists. All valid subsets.
     */
    vector<vector<int>> subsetsWithDup(vector<int> &nums) {
        vector<int> current;
        vector<vector<int>> collector;
        subsetHelper(nums, 0, current, collector);
        return collector;
    }
};

int main(){
    Solution sol;
    vector<int> nums{1,2,2};
    auto sets = sol.subsetsWithDup(nums);
    for(auto s : sets){
        cout << "[";
        for(auto i : s){
            cout << i << ", ";
        }
        cout << "]" <<endl;
    }
    return 0;
} 

