// Min Heap
class MinHeap{
  heap = [null]
  insert  = (node)=>{
    this.heap.push(node);

    if(this.heap.length > 2){
      let idx = this.heap.length - 1;

      while(this.heap[idx] < this.heap[Math.floor(idx/2)]){
        let parentIdx = Math.floor(idx/2);
        if(idx >= 1){
          [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
          if (parentIdx > 1) {
						idx = parentIdx;
					} else {
						break;
					};
        }
      }
    }
  }
  delete = ()=>{
    let smallest = this.heap[1];
		if (this.heap.length > 2) {
			this.heap[1] = this.heap[this.heap.length - 1];
			this.heap.pop();
			if (this.heap.length == 3) {
				if (this.heap[1] > this.heap[2]) {
					[this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
				};
				return smallest;
			};

			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;

			while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
				if (this.heap[left] < this.heap[right]) {
					[this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
					i = 2 * i
				} else {
					[this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (this.heap[left] == undefined || this.heap[right] == undefined) { // this is leaf node
					break;
				};
			};

		} else if (this.heap.length == 2) {
			this.heap.pop();
		} else {
			return null;
		};
		return smallest;
  }
}

const myMinHeap = new MinHeap()

myMinHeap.insert(200)
myMinHeap.insert(100)
myMinHeap.insert(900)
myMinHeap.insert(-50)
myMinHeap.insert(120)
myMinHeap.insert(450)
myMinHeap.insert(9)
myMinHeap.insert(5)
myMinHeap.insert(1010)
console.log(myMinHeap.heap)
console.log(myMinHeap.delete())