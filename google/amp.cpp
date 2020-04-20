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
