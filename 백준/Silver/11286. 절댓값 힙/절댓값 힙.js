class MinHeap{
  constructor(){
    this.heap=[null];
  }
  size(){
    return this.heap.length-1;
  }
  swap(a,b){
    const heap=this.heap;
    [heap[b], heap[a]]=[heap[a], heap[b]];
  }
  top(){
    return this.heap[1];
  }
  push(value){
    const heap=this.heap;
    heap.push(value);
    
    let cur=heap.length-1;
    let par=Math.floor(cur/2);
    
    while(par>0 && 
    (Math.abs(heap[par])>Math.abs(heap[cur])
    ||(Math.abs(heap[par])==Math.abs(heap[cur]) && heap[par]>heap[cur]))){
      this.swap(cur, par);
      cur=par;
      par=Math.floor(cur/2);
    }
  }
  pop(){
    const heap=this.heap;
    if(this.size()===0) return 0;
    if(this.size()===1) return heap.pop();
    
    const returnValue=heap[1];
    heap[1]=heap.pop();
    
    let cur=1, left=cur*2, right=left+1;
    
    while(left<heap.length){
      let smaller=left;
      
      if(right<heap.length && (
        Math.abs(heap[smaller])>Math.abs(heap[right]) ||
        (Math.abs(heap[smaller])===Math.abs(heap[right]) && heap[smaller]>heap[right])
      )){
        smaller=right;
      }
      
      if(Math.abs(heap[smaller])>Math.abs(heap[cur])||
      (Math.abs(heap[smaller])===Math.abs(heap[cur]) && heap[smaller]>heap[cur])
      ) break;
      
      this.swap(smaller, cur);
      cur=smaller;
      left=cur*2;
      right=left+1;
    }
    return returnValue;
  }
}

const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input.map(Number);

const heap=new MinHeap();

for(const n of list){
  if(n!==0) heap.push(n);
  else{
    const min=heap.pop();
    
    console.log(min);
  }
}