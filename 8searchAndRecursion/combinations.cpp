class Solution {
public:
    void combineHelper(int n, int start, int k, vector<int> &currentSet, vector<vector<int>> & collector){
        if(currentSet.size() == k){
            vector<int>* copy = new vector<int>(currentSet);
            collector.push_back(*copy);
            return;
        }
        
        if( (n - start + 1 + currentSet.size()) < k) return;

        currentSet.push_back(start);
        combineHelper(n, start+1, k, currentSet, collector);

        currentSet.pop_back();
        combineHelper(n, start+1, k, currentSet, collector);
        return;
    }

    /**
     * @param n: Given the range of numbers
     * @param k: Given the numbers of combinations
     * @return: All the combinations of k numbers out of 1..n
     */
    vector<vector<int>> combine(int n, int k) {
        vector<int> currentSet;
        vector<vector<int> collector;
        combineHelper(n, 1, k, currentSet, collector);
        return collector;
    }
};
