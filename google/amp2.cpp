#include <iostream>
#include <map>
#include <vector>

using namespace std;

class Solution {

    int removeMin(map<int, int>& valueMaps, int &min){
        int preMin = min;
        valueMaps[min]--;
        while(valueMaps[min] == 0 && min < 100) min++;
        return preMin;
    }

    int removeMax(map<int, int>& valueMaps, int&max){
        int preMax = max;
        valueMaps[max]--;
        while(valueMaps[max] == 0 && max >0) max--;
        return preMax;
    } 
    

    void restore(map<int, int>& valueMaps, int* removed, int& min, int& max, int preMin, int preMax){
       for(int i = 0; i < 3; i++) valueMaps[removed[i]]++;
       min = preMin;
       max = preMax;
    }
public:

    int MinimumAmplitude(vector<int> &A) {
        if(A.size() <= 4) return 0; 
        map<int, int> valueMaps;
        for(int i=0; i < 100; i++){
            valueMaps[i] = 0;
        }
        
        for(auto v : A){
            valueMaps[v]++;
        }

        int min = 99;
        int max = 0;

        for(int i = 0; i < 100; i++){
            if(valueMaps[i] != 0 && i < min) min = i;
            if(valueMaps[i] != 0 && i > max) max = i;
        }
       
        int minAmp = max - min;

        int removed[] = {0, 0, 0};
        int preMin = min;
        int preMax = max;
        
        //there are four cases [s,s,s], [s,s,l], [s,l,l], [l, l, l]
        removed[0] = removeMin(valueMaps, min);
        removed[1] = removeMin(valueMaps, min);
        removed[2] = removeMin(valueMaps, min);
        if(max - min < minAmp) minAmp = max-min;
        restore(valueMaps, removed, min, max, preMin, preMax);
             
        removed[0] = removeMin(valueMaps, min);
        removed[1] = removeMin(valueMaps, min);
        removed[2] = removeMax(valueMaps, max);
        if(max - min < minAmp) minAmp = max-min;
        restore(valueMaps, removed, min, max, preMin, preMax);

        removed[0] = removeMin(valueMaps, min);
        removed[1] = removeMax(valueMaps, max);
        removed[2] = removeMax(valueMaps, max);
        if(max - min < minAmp) minAmp = max-min;
        restore(valueMaps, removed, min, max, preMin, preMax);

        removed[0] = removeMax(valueMaps, max);
        removed[1] = removeMax(valueMaps, max);
        removed[2] = removeMax(valueMaps, max);
        if(max - min < minAmp) minAmp = max-min;
        
        return minAmp;    
    }
};


