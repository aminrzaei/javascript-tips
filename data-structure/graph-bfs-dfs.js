// Graph
const airports = ['Tehran', 'London', 'Istanbol', 'Dubai', 'Newyork', 'Dohe', 'Kabol', 'Seoul', 'Berlin', 'Pekan']

const routes = [
  ['Tehran', 'London'],
  ['Tehran', 'Kabol'],
  ['Seoul', 'London'],
  ['Istanbol', 'Pekan'],
  ['Istanbol', 'Tehran'],
  ['Istanbol', 'Berlin'],
  ['Dohe', 'Berlin'],
  ['Dohe', 'Dubai'],
  ['Dubai', 'Istanbol'],
  ['Pekan', 'Berlin'],
  ['Pekan', 'Newyork'],
  ['Newyork', 'Tehran'],
  ['Newyork', 'Berlin'],
  ['Newyork', 'Istanbol'],
]

const connection = new Map();

// Add node
function addNode(airport){
  connection.set(airport, [])
}

// Add edge, undirected
function addEdge(origin, destination){
  connection.get(origin).push(destination);
  connection.get(destination).push(origin);
}

// Create Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(connection)




// Breadth first search
function bfs(start){
  const queue = [start];
  const visited = new Set();
  while(queue.length > 0){
    const airport = queue.shift();
    let destinations = connection.get(airport);
    for(const destination of destinations){
      console.log(airport)
      console.log('==========>', destination)
      if(destination === 'Pekan'){
        console.log('------------------------------- Found')
      }
      if(!visited.has(destination)){
        visited.add(destination)
        queue.push(destination) 
        
      }
    }
  }
  
}

// bfs('Tehran')


let path2 = [];
// Depth first search
function dfs(start , visited = new Set()){
  path2.push(start)
  // console.log(start)
  visited.add(start)
  const destinations = connection.get(start)
  for(const destination of destinations){
    if(destination === 'Tehran'){
      console.log('Path is =',[...path2, destination])
      // console.log('DFS found Pekan')
      return
    }
    if(!visited.has(destination)){
      dfs(destination, visited)
    }
    
  }
  path2.pop(start)
}

// dfs('Dohe')