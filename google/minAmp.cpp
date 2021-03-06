#include <vector>
#include <unordered_map>
#include <algorithm>
#include <iostream>
#include <string>
#include <sstream>
#include <cstring>
#include <cstdlib>
#include <unordered_set>
#include <climits>

using namespace std;

class Solution {
public:
    /**
     * @param A: a list of integer
     * @return: Return the smallest amplitude
     */
    int MinimumAmplitude(vector<int> &A) {
        vector<int> sorted(101, 0);
        unsigned min = 0;
        unsigned max = 100;
        for(auto i : A){
            sorted[i+50]++;
        }

        if(A.size() <=3) return 0;

        while(sorted[min]==0) min++;
        while(sorted[max]==0) max--;

        auto savedMax = max;
        auto savedMin = min;
        vector<int> sorted1(sorted);
        vector<int> sorted2(sorted);
        vector<int> sorted3(sorted);
        vector<int> sorted4(sorted);
        //max,max,max
        auto c = 3;
        while(c > 0){
            sorted1[max]--;
            while(sorted1[max] ==0) max--;
            c--;
        }
        while(sorted1[max] == 0) max--;
        auto minDistance = max - min;

        max = savedMax;
        min = savedMin;
        //max, max, min
        c = 2; 
        while(c > 0){
            sorted2[max]--;
            while(sorted2[max] ==0) max--;
            c--;
        }
        while(sorted2[max] == 0) max--;
        sorted2[min]--;
        while(sorted2[min]==0) min++;
        if(max - min < minDistance) minDistance = max - min; 
         
        max = savedMax;
        min = savedMin;
        //max, min, min
        c = 2; 
        while(c > 0){
            sorted3[min]--;
            while(sorted3[min] ==0) min++;
            c--;
        }
        while(sorted3[min] == 0) min++;
        sorted3[max]--;
        while(sorted3[max]==0) max--;
        if(max - min < minDistance) minDistance = max - min; 

        max = savedMax;
        min = savedMin;
         //min,min,min
        c = 3;
        while(c > 0){
            sorted4[min]--;
            while(sorted4[min] ==0) min++;
            c--;
        }
        while(sorted4[min] == 0) min++;
        if(max - min < minDistance) minDistance = max - min; 

        return minDistance;     
    }
};

int main(){
    Solution sol;
//    vector<int> inputs{-4,-5,-3,37,-31,-17,-46,-34,-5,42,-13,-42,-2,-31,9,-31,28,24,46,-39,-18,-50,-6,6,16,14,-27,28,10,-4,24,-14,-26,20,42,-21,-39,41,17,-3,2,-27,-29,-50,23,36,19,-41,-46,1,18,-1,0,10,47,-35,10,45,-35,-1,-38,-32,-32,46,-48,6,-49,-32,40,-38,-32,-17,-23,22,-43,21,-44,0,34,-31,20,-40,44,21,-46,42,49,21,50,-46,-15,47,20,24,-11,50,-42,-27,-29,-24};
    vector<int> inputs{4, -9, 7, 6, -6};
    auto r = sol.MinimumAmplitude(inputs);
    cout << "amp after change is: " << r << endl;
    return 0;
}
