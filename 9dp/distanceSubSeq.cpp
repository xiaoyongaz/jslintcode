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
    int distinctHeler(string& S, string &T, int index1, int index2, vector<vector<int>> &distinctMap){
        if(distinctMap[index1][index2] != -1) return distinctMap[index1][index2];
        if(index1 == S.size() && index2 == T.size()) {
            distinctMap[index1][index2] = 1;
            return 1;
        }

        if(index2 == T.size()) {
            distinctMap[index1][index2] = 1;
            return 1;
        }
        
        if(index1 == S.size()){
            distinctMap[index1][index2] = 0;
            return 0;
        }

        //if S[index1] == T[index2], we can take S[index1] or not take it
        //if S[index1] != T[index2], we must skip S[index1]
        
        auto total = distinctHeler(S, T, index1+1, index2, distinctMap);
        if(S[index1] == T[index2]){
            total += distinctHeler(S, T, index1+1, index2+1, distinctMap);
        }

        distinctMap[index1][index2] = total;
        return total;
    }

    /**
     * @param S: A string
     * @param T: A string
     * @return: Count the number of distinct subsequences
     */
    int numDistinct(string &S, string &T) {
        vector<vector<int>> distinctMap;
        for(int i =0; i <= S.size(); i++){
            distinctMap.push_back({});
            for(int j = 0; j <=T.size(); j++){
                distinctMap[i].push_back(-1);
            }
        }
        auto r = distinctHeler(S, T, 0, 0, distinctMap);
        return r;
    }
};

int main(){
    Solution sol;

    string S = "rabbbit";
    string T = "rabbit";
    auto r = sol.numDistinct(S, T);

    cout << "numDistinct of rabbbit and rabbit is: " << r << endl;
    return 0;
}
