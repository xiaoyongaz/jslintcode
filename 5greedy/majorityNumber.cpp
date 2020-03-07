class Solution {
public:
    /*
     * @param nums: a list of integers
     * @return: find a  majority number
     */
    int majorityNumber(vector<int> &nums) {
        // write your code here
        if(nums.size() == 0) return -1;
        int majorityNumber;
        unsigned majorityCnt = 0;
        for(auto i : nums){
            if(majorityCnt == 0){
                majorityNumber = i;
                majorityCnt = 1;
            }else {
                if( i == majorityNumber ) majorityCnt++;
                else majorityCnt--;
            }
        }
        return majorityNumber;
    }
};
