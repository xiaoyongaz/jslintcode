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
    int nextMaxMin(vector<int> &sorted, unsigned min, unsigned max){
        while(sorted[max]==0 && max > min) max--;
        return max - min;
    }

    int nextMinMax(vector<int> &sorted, unsigned min, unsigned max){
        while(sorted[min]==0 && max > min) min++;
        return max - min;
    }

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

        for(int i = 0; i < 101; i++){
            cout << "cout of " << i << " is " << sorted[i] << endl;
        }

        if(A.size() <=3) return 0;

        while(sorted[min]==0) min++;
        while(sorted[max]==0) max--;

        cout << "mins + 50 is: " << min << endl;
        cout << "mins + 50 is: " << max << endl;

        auto c = 0;
        while(c < 3){
            sorted[max]--;
            auto maxMin = nextMaxMin(sorted, min, max);
            sorted[max]++;
            cout << "max Min distance after remove max is: " << maxMin << endl;
            sorted[min]--;
            auto minMax = nextMinMax(sorted, min, max);
            sorted[min]++;
            cout << "max Min distance after remove min is: " << minMax << endl;
            if(maxMin < minMax){
                cout << "remove max: " << max << endl;
                sorted[max]--;
                while(sorted[max]==0 && max > min) max--;
                if(max == min) return 0;
            }
            else if(minMax < maxMin){
                cout << "remove min: " << min << endl;
                sorted[min]--;
                while(sorted[min]==0 && max > min) min++;
                if(max == min) return 0;
            }
            else {  
                auto nextMax = max-1;
                while(sorted[nextMax]== 0) nextMax--;
                auto nextMin = min+1;
                while(sorted[nextMin] == 0) nextMin++;
                cout << "nextMax is " << nextMax << " nextMin is: " << nextMin << endl;
                if((max - nextMax) > (nextMin - min)){
                    cout << "remove max: " << max << endl;
                    sorted[max]--;
                    while(sorted[max]==0 && max > min) max--;
                    if(max == min) return 0;
                }
                else if((max - nextMax) < (nextMin - min))
                {
                    cout << "remove min: " << min << endl;
                    sorted[min]--;
                    while(sorted[min]==0 && max > min) min++;
                    if(max == min) return 0;
                }
                else {
                    auto nextNextMax = nextMax -1;
                    while(sorted[nextNextMax] == 0) nextNextMax--;
                    auto nextNextMin = nextMin+1;
                    while(sorted[nextNextMin] == 0) nextNextMin++;
                    if((max - nextNextMax) > (nextNextMin - min)){
                        cout << "remove max: " << max << endl;
                        sorted[max]--;
                        while(sorted[max]==0 && max > min) max--;
                        if(max == min) return 0;
                    }
                    cout << "remove min: " << min << endl;
                    sorted[min]--;
                    while(sorted[min]==0 && max > min) min++;
                    if(max == min) return 0;
                }
            }
            c++;
        }

        return max - min;     
    }
};

int main(){
    Solution sol;
    vector<int> inputs{-4,-5,-3,37,-31,-17,-46,-34,-5,42,-13,-42,-2,-31,9,-31,28,24,46,-39,-18,-50,-6,6,16,14,-27,28,10,-4,24,-14,-26,20,42,-21,-39,41,17,-3,2,-27,-29,-50,23,36,19,-41,-46,1,18,-1,0,10,47,-35,10,45,-35,-1,-38,-32,-32,46,-48,6,-49,-32,40,-38,-32,-17,-23,22,-43,21,-44,0,34,-31,20,-40,44,21,-46,42,49,21,50,-46,-15,47,20,24,-11,50,-42,-27,-29,-24};
    auto r = sol.MinimumAmplitude(inputs);
    cout << "amp after change is: " << r << endl;
    return 0;
}
