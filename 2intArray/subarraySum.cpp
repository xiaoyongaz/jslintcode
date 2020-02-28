#include <iostream>
#include <vector>

using namespace std;
class Solution {
public:
     /**
     * @param nums: A list of integers
     * @return: A list of integers includes the index of the first number and the index of the last number
     */
    vector<int> subarraySum(vector<int> &nums) {
        auto dim = nums.size();
        int sums;
        vector<int> result(2, 0);
        for(int i = 0; i < nums.size(); i++){
            sums = nums[i];
            if(sums == 0) {
                result[0] = i;
                result[1] = i;
                return result;
            } 
            for(int j = i+1; j < nums.size(); j++){
                sums += nums[j];
                if(sums == 0) {
                    result[0] = i;
                    result[1] = j;
                    return result;
                } 
            }
        }
        return result;
    }
};

/*
Input:  [-3, 1, 2, -3, 4]
Output: [0, 2] or [1, 3].
Input:  [-3, 1, -4, 2, -3, 4]
Output: [1,5]	
Notice
There is at least one subarray that it's sum equals to zero.
*/
int main() 
{ 
    cout << "start testing" << endl;
    Solution sl;  
    vector<int> vect = {-3, 1, 2, -3, 4}; 

    auto r =  sl.subarraySum(vect);

    cout << "from " << r[0] << " to " << r[1] << " add to 0" << endl;

    vector<int> vect2 = {-3, 1, -4, 2, -3, 4}; 

    r =  sl.subarraySum(vect2);

    cout << "from " << r[0] << " to " << r[1] << " add to 0" << endl;

    vector<int> vect3 = {1, 0, 1}; 

    r =  sl.subarraySum(vect3);

    cout << "from " << r[0] << " to " << r[1] << " add to 0" << endl;

    return 0; 
} 
