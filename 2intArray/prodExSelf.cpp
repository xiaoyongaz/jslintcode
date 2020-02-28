#include <iostream>
#include <vector>

using namespace std;
//example a = [1, 2, 3]
//b = [6, 3, 2]
class Solution {
    public:
        /*
         * @param nums: Given an integers array A
         * @return: A long long array B and B[i]= A[0] * ... * A[i-1] * A[i+1] * ... * A[n-1]
         */
        vector<long long> productExcludeItself(vector<int> &nums) {
            // write your code herei
            auto len = nums.size();
            if(len == 0) return {};
            vector<long long> results(len);
            if(len == 1) {
                results[0] = nums[0];
                return results;
            }
            if(len == 2) {
                results[0] = nums[1];
                results[1] = nums[0];
                return results;
            }
            vector<long long> endwithI(len);
            vector<long long> startWithI(len);
            endwithI[0] = nums[0];
            startWithI[len-1] = nums[len-1];
            for(auto i = 1; i< nums.size(); i++){
                endwithI[i] = endwithI[i-1]*nums[i];
                startWithI[len-i-1] = nums[len-i-1] * startWithI[len-i]; 
            }
            results[0] = startWithI[1];
            results[len-1] = endwithI[len-2];
            for(auto i = 1; i< nums.size()-1; i++){
                results[i] = endwithI[i-1] * startWithI[i+1];
            }
            return results;
        }
};

int main() 
{ 
    cout << "start testing" << endl;
    Solution sl;  
    vector<int> vect = {1, 2, 3, 4}; 

    auto r =  sl.productExcludeItself(vect);
    for(auto i : r){
        cout << i << ",";
    }
    return 0;
}


