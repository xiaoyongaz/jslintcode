/**
 * @param n: n nodes labeled from 0 to n - 1
 * @param edges: a undirected graph
 * @return:  a list of all the MHTs root labels
 */
export function findMinHeightTrees (n, edges) {
    //topological sort from leaf nodes
    let currentlevel = [];
    let nextLevel = [];
    let nodeAssociateEdges = [];
    let visited = new Set();
    for(let edge of edges){
        if(nodeAssociateEdges[edge[0]] === undefined){
            nodeAssociateEdges[edge[0]] = new Set();
        }
        nodeAssociateEdges[edge[0]].add(edge[1]);
        if(nodeAssociateEdges[edge[1]] === undefined){
            nodeAssociateEdges[edge[1]] = new Set();
        }
        nodeAssociateEdges[edge[1]].add(edge[0]);
    }

    for(let i = 0; i < n; i++){
        if(nodeAssociateEdges[i] !== undefined && nodeAssociateEdges[i].size === 1){
            currentlevel.push(i);
            visited.add(i);
        }
    }

    while(currentlevel.length >0){
        for(let node of currentlevel){
            for(let adj of nodeAssociateEdges[node]){
                if(!visited.has(adj)){
                    nextLevel.push(adj);
                    visited.add(adj);
                }
            }
        }
        if(nextLevel.length === 0) return currentlevel;
        else {
            currentlevel = nextLevel;
            nextLevel = [];
        }
    }
}


