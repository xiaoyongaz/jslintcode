class Solution {
public:
    /*
     * @param nums: An ineger array
     * @return: An integer
     */
    //loop init condition
    //loop invariant
    //loop end
    //loop change
    int removeDuplicates(vector<int> &nums) {
        if(nums.size() == 0 || nums.size() == 1) return nums.size();
        int movedTo = 0;
        int moveFrom = 0;
        while(moveFrom < nums.size()){
            nums[movedTo] = nums[moveFrom];
            movedTo++;
            moveFrom++;
            while(moveFrom < nums.size() && nums[moveFrom-1] == nums[moveFrom]) moveFrom++; 
        }
        return movedTo;
    }
};
