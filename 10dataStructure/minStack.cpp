#include <iostream>
#include <vector>
#include <stack>

using namespace std;
class MinStack {

    stack<int> store;
    stack<int> minStore;
public:
 
    MinStack() {
    }

    /*
     * @param number: An integer
     * @return: nothing
     */
    void push(int number) {
        store.push(number);
        if(minStore.empty() ||  minStore.top() >=number) 
            minStore.push(number);
    }

    /*
     * @return: An integer
     */
    int pop() {
        auto r = store.top();
        store.pop();
        if(r == minStore.top()) minStore.pop();
        return r;
    }

    /*
     * @return: An integer
     */
    int min() {
        return minStore.top();
    }
};

int main(){
    MinStack ms;
    ms.push(1);
} 
