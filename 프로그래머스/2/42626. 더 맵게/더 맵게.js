function solution(scoville, K) {
    const heap=new MinHeap();
    for(let i=0; i<scoville.length; i++){
        heap.push(scoville[i]);
    }
    let count=0;

    while(heap.size() >= 2 && heap.top() < K){
        count++
        const first=heap.pop();
        const second=heap.pop();
        const sum = first+(second*2);
        heap.push(sum);
    }
    // 모든 요소를 섞었는데도 아직 K 미만이면 실패
    return heap.top() >= K ? count : -1;
}

class MinHeap{
    constructor(){
        this.heap=[null];
    }
    swap(a,b){
        const heap=this.heap;
        [heap[a], heap[b]]=[heap[b], heap[a]];
    }
    size(){
        return this.heap.length-1;
    }
    push(value){
        const heap=this.heap;
        heap.push(value);
        let cur=heap.length-1;
        let par=Math.floor(cur/2);
        
        while(par>0 && heap[cur]<heap[par]){
            this.swap(cur,par);
            cur=par;
            par=Math.floor(cur/2);
        }
    }
    pop(){
        const heap=this.heap;
        
        if (this.size() === 0) return 0;
        if (this.size() === 1) return heap.pop();
        
        let returnValue=heap[1];
        heap[1]=heap.pop();
        let cur=1;
        let left=cur*2;
        let right=left+1;
        
        while(left<heap.length){
            let smaller=left;
            if(right<heap.length && heap[right]<heap[left]) smaller=right;
            
            if(heap[cur]<heap[smaller]) break;
            
            this.swap(cur,smaller);
            cur=smaller;
            left=cur*2;
            right=left+1;
        }
        return returnValue;
    }
    list(){
        return this.heap.slice(1,);
    }
    top(){
        return this.heap[1];
    }
}