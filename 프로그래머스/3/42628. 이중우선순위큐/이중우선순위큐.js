function solution(operations) {
    const minHeap=new MinHeap();
    const maxHeap=new MaxHeap();
    
    for(const command of operations){
        if(command[0]==='I'){
            const num=Number(command.split(' ')[1])
            minHeap.push(num)
            maxHeap.push(num)
        }else if(command[2]==='1'){
            if (maxHeap.size() > 0) {
                const num = maxHeap.pop();
                minHeap.remove(num);
            }
        }else{
            if (minHeap.size() > 0) {
                const num = minHeap.pop();
                maxHeap.remove(num);
            }
        }
    }
    if (maxHeap.size() === 0 || minHeap.size() === 0) return [0, 0];
    return [maxHeap.top(), minHeap.top()];
}

class MinHeap{
    constructor(){
        this.heap=[null]
    }
    size(){
        return this.heap.length-1
    }
    swap(a,b){
        const heap=this.heap;
        [heap[a],heap[b]]=[heap[b],heap[a]]
    }
    push(value){
        const heap=this.heap;
        heap.push(value);
        let cur = heap.length - 1;
        let par = Math.floor(cur / 2);

        while (par > 0 && heap[par] > heap[cur]) {
          this.swap(cur, par);
          cur = par;
          par = Math.floor(cur / 2);
        }
    }
    pop(){
        const heap=this.heap;
        
        if(this.size()===1) return heap.pop()
        
        let returnValue=heap[1]
        heap[1]=heap.pop();
        
        let cur=1;
        let left=cur*2;
        let right=cur*2+1;
        
        while (left < heap.length) {
          let smaller = left; //왼쪽 자식이 더 작다고 가정
          if (right < heap.length && heap[right] < heap[left]) {
            smaller = right; //오른쪽 자식이 작다면 교체
          }

          if (heap[cur] <= heap[smaller]) break;

          this.swap(cur, smaller);
          cur = smaller;
          left = cur * 2;
          right = cur * 2 + 1;
        }

        return returnValue;
    }
    remove(value){
        const heap=this.heap;
        const index=heap.findIndex(n=>n===value)
        console.log(value, index)
        if(this.size()===index) heap.pop()
        else{
            heap[index]=heap.pop()
            let cur=index;
            let left=cur*2;
            let right=cur*2+1;

            while (left < heap.length) {
              let smaller = left;
              if (right < heap.length && heap[right] < heap[left]) {
                smaller = right;
              }

              if (heap[cur] <= heap[smaller]) break;

              this.swap(cur, smaller);
              cur = smaller;
              left = cur * 2;
              right = cur * 2 + 1;
            }
        }
    }
    top(){
        return this.heap[1]
    }
}

class MaxHeap{
    constructor(){
        this.heap=[null]
    }
    size(){
        return this.heap.length-1
    }
    swap(a,b){
        const heap=this.heap;
        [heap[a],heap[b]]=[heap[b],heap[a]]
    }
    push(value){
        const heap=this.heap;
        heap.push(value);
        let cur = heap.length - 1;
        let par = Math.floor(cur / 2);

        while (par > 0 && heap[par] < heap[cur]) {
          this.swap(cur, par);
          cur = par;
          par = Math.floor(cur / 2);
        }
    }
    pop(){
        const heap=this.heap;
        
        if(this.size()===1) return heap.pop()
        
        let returnValue=heap[1]
        heap[1]=heap.pop();
        
        let cur=1;
        let left=cur*2;
        let right=cur*2+1;
        
        while (left < heap.length) {
          let larger = left;
          if (right < heap.length && heap[right] > heap[left]) {
            larger = right; 
          }

          if (heap[cur] >= heap[larger]) break;

          this.swap(cur, larger);
          cur = larger;
          left = cur * 2;
          right = cur * 2 + 1;
        }

        return returnValue;
    }
    remove(value){
        const heap=this.heap;
        const index=heap.findIndex(n=>n===value)
        if(this.size()===index) heap.pop()
        else{
            heap[index]=heap.pop()
            let cur=index;
            let left=cur*2;
            let right=cur*2+1;

            while (left < heap.length) {
              let larger = left;
              if (right < heap.length && heap[right] > heap[left]) {
                larger = right; 
              }

              if (heap[cur] >= heap[larger]) break;

              this.swap(cur, larger);
              cur = larger;
              left = cur * 2;
              right = cur * 2 + 1;
            }
        }
    }
    top(){
        return this.heap[1]
    }
}