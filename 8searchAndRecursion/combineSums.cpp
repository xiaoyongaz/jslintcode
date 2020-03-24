class Solution {
public:

    int getSum(vector<int> set){
        int c = 0;
        for( auto i: set){
            c += i;
        }
        return c;
    }

    void combineSumHelper(vector<int> & candidates, vector<int> & currentSet, int start, int target, vector<vector<int>> & collector){
        auto sum = getSum(currentSet);
        if(sum > target || start >= candidates.size()) return;
        if(sum == target){
            vector<int> * r = new vector<int>(currentSet);
            collector.push_back(*r);
            return;
        }

        currentSet.push_back(candidates[start]);
        combineSumHelper(candidates, currentSet, start, target, collector);

        currentSet.pop_back();
        while(start + 1 < candidates.size() && candidates[start+1] == candidates[start]) start++;
        combineSumHelper(candidates, currentSet, start+1, target, collector);
    }

    /**
     * @param candidates: A list of integers
     * @param target: An integer
     * @return: A list of lists of integers
     */
    vector<vector<int>> combinationSum(vector<int> &candidates, int target) {
        vector<vector<int>> collector;
        vector<int> currentSet;
        sort(candidates.begin(), candidates.end());
        combineSumHelper(candidates, currentSet, 0, target, collector);
        return collector; 
    }
};
