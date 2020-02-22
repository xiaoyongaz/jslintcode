//note, 2/21: need to be very clear about the end condition
class Solution {
public:
    /*
     * @param A: A list of integers
     * @param elem: An integer
     * @return: The new length after remove
     */
    int removeElement(vector<int> &A, int elem) {
        auto start = 0;
        auto endSwitch = A.size() - 1;
        //loop invariant: start < endSwitch && A[start] != element && A[endSwitch] == element
        while(start < endSwitch)
        {
            while(start < endSwitch && A[start] != elem) start++;
            while(start < endSwitch && A[endSwitch] == elem) endSwitch--;
            if(start < endSwitch){
                auto temp = A[start];
                A[start] = A[endSwitch];
                A[endSwitch] = temp;
                start++;
                endSwitch--;
            }
        }
        if(start == endSwitch && A[start] != elem) return start + 1;
        return start;
    }
};
