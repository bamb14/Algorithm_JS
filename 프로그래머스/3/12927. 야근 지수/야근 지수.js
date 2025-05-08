function solution(n, works) {
    let heap=new MaxHeap();
    for(let work of works) heap.push(work);
    
    while(n>0){
        let top=heap.pop();
        if(top<=0) break;
        top--;
        n--;
        heap.push(top);
    }
    
    var answer = heap.getList();
    return answer.reduce((a,b)=>a + b ** 2,0);; 
}
class MaxHeap{
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
    peek(){
        return this.heap[1];
    }
    push(value){
        const heap=this.heap;
        heap.push(value);
        let curr=heap.length-1;
        let par=Math.floor(curr/2);
        while(par>0 && heap[curr]>heap[par]){
            this.swap(curr, par);
            curr=par;
            par=Math.floor(curr/2);
        }
    }
    pop(){
        const heap=this.heap;
        if(this.size()===0) return 0;
        if(this.size()===1) return heap.pop();
        
        let returnValue=heap[1];
        heap[1]=heap.pop();
        
        let curr=1;
        let left=curr*2;
        let right=curr*2+1;
        while(left<heap.length){
            let larger=left;
            if(right<heap.length && heap[left]<heap[right]) larger=right;
            
            if(heap[curr]>heap[larger]) break;
            
            this.swap(curr, larger);
            curr=larger;
            left=curr*2;
            right=curr*2+1;
        }
        return returnValue;
    }
    getList(){
        return this.heap.slice(1,);
    }
}