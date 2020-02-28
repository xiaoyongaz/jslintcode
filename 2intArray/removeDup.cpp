class Solution {
public:
    /*
     * @param nums: An ineger array
     * @return: An integer
     */
    int removeDuplicates(vector<int> &nums) {
        //two pointers, first one point to the place to move to
        //second one point to the new value to move
        //loop invariant: newValueP < vector.size()
        if(nums.size() == 0 || nums.size()== 1) return nums.size();
        auto movetoAhead = 0;
        auto currentValue = nums[moveToAhead];
        auto newValueP = 0;
        while(newValueP < nums.size()){
            while(newValueP < nums.size() && nums[newValueP] == currentValue) newValueP++;
            if(newValueP < nums.size()){
                movetoAhead++;
                nums[movetoAhead] = nums[newValueP];
                currentValue = nums[movetoAhead];
            } 
        } 
        return movetoAhead + 1;
    }
};
