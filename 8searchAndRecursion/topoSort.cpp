#include <vector>
#include <unordered_map>
#include <algorithm>
#include <iostream>

using namespace std;

struct DirectedGraphNode {
    int label;
    vector<DirectedGraphNode *> neighbors;
    DirectedGraphNode(int x) : label(x) {};
};


class Solution {
    public:
        void DFSVisit(DirectedGraphNode* v, unordered_map<DirectedGraphNode*, DirectedGraphNode*>& parentMap, vector<DirectedGraphNode*>& visitOrder){
            cout << "start visiting node " << v->label << endl;
            for(auto n : v->neighbors){
                cout << "visiting neighbor " << n->label << endl;
                if(parentMap.find(n) == parentMap.end()){
                    parentMap[n] = v;
                    DFSVisit(n, parentMap, visitOrder);
                }
            }

            cout << "finish visiting node " << v->label << endl;
            visitOrder.push_back(v);
        }

        /*
         * @param graph: A list of Directed graph node
         * @return: Any topological order for the given graph.
         */
        vector<DirectedGraphNode*> topSort(vector<DirectedGraphNode*>& graph) {
            vector<DirectedGraphNode*> visitOrder;
            unordered_map<DirectedGraphNode*, DirectedGraphNode*> parentMap;
            for(auto s : graph){
                if(parentMap.find(s) == parentMap.end()){
                    parentMap[s] = nullptr;
                    DFSVisit(s, parentMap, visitOrder);
                }
            }

            reverse(visitOrder.begin(), visitOrder.end());
            return visitOrder;
        }
};

int main(){
    vector<DirectedGraphNode*> graph;
    for(int i = 0; i < 5; i++)
    {
        auto p = new DirectedGraphNode(i);
        graph.push_back(p);
    }

    graph[0]->neighbors.push_back(graph[1]);
    graph[0]->neighbors.push_back(graph[2]);
    graph[0]->neighbors.push_back(graph[3]);
    graph[0]->neighbors.push_back(graph[4]);
    graph[1]->neighbors.push_back(graph[3]);
    graph[1]->neighbors.push_back(graph[4]);
    graph[2]->neighbors.push_back(graph[1]);
    graph[2]->neighbors.push_back(graph[4]);
    graph[3]->neighbors.push_back(graph[4]);

    Solution sol;

    cout << "topological sort" << endl;

    auto r = sol.topSort(graph);
   

    for(auto v : r){
        cout << "result: " << v->label << endl;
    }

    return 0;
}
