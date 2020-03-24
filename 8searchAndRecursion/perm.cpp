#include <vector>
#include <unordered_map>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
    public:
        
        void permutationHelper(vector<int>& inputs, int start, vector<vector<int>>& collector){
            if(start == inputs.size()-1){
                vector<int> * r = new vector<int>(inputs);
                collector.push_back(*r);
                return;
            }

            for(int i = start; i < inputs.size(); i++){
                //swap inputs[start] and input[i]
                auto tmp = inputs[start];
                inputs[start] = inputs[i];
                inputs[i] = tmp;
                permutationHelper(inputs, start+1, collector);
                //swap back
                tmp = inputs[start];
                inputs[start] = inputs[i];
                inputs[i] = tmp;
            }
            return;
        }

        vector<vector<int>> permutation(vector<int>& inputs){
            vector<vector<int>> results;
            permutationHelper(inputs, 0, results);
            return results;    
        }
}; 

int main()
{
    Solution sol;
    vector<int> inputs{1,2,3,4,5};
    auto results = sol.permutation(inputs);
    for(auto r : results){
        for(auto i: r){
            cout <<  i << " ";
        }
        cout << endl;
    }

    return 0;
}

