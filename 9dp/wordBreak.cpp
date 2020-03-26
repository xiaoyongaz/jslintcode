#include <vector>
#include <unordered_map>
#include <algorithm>
#include <iostream>
#include <string>
#include <sstream>
#include <cstring>
#include <cstdlib>
#include <unordered_set>

using namespace std;

class Solution {
public:
    bool wordBreakHelper(string &s, int start, int end, vector<vector<int>> &wordMap, unordered_set<string> &dict){
        if(wordMap[start][end] != -1){
            return wordMap[start][end] == 1;
        }
        
        auto sub = s.substr(start, end-start);
        if(dict.find(sub) != dict.end()){
            wordMap[start][end] = 1;
            return true;
        }

        for(int i = start + 1; i < end; i++){
            auto seek1 = wordBreakHelper(s, start, i, wordMap, dict);
            auto seek2 = wordBreakHelper(s, i, end, wordMap, dict);
            if(seek1 == 1 && seek2 == 1) {
                wordMap[start][end] = 1;
                return 1;
            }
        }
        wordMap[start][end] = 0;
        return 0;
    }  

    /*
     * @param s: A string
     * @param dict: A dictionary of words dict
     * @return: A boolean
     */
    bool wordBreak(string &s, unordered_set<string> &dict) {
        if(s.size() == 0) return true;
        vector<vector<int>> wordMap;
        for(int i = 0; i <= s.size(); i++){
            wordMap.push_back({});
            for(int j = 0; j <= s.size(); j++){
                wordMap[i].push_back(-1);
            }
        }
        auto r = wordBreakHelper(s, 0, s.size(), wordMap, dict);
        return r;
    }
};

int main(){
    Solution sol;
    return 0;
}

