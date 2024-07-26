function solution(d, budget) {
    d=d.sort((a,b)=>a-b);
    return d.filter((a)=> (budget-=a)>=0).length;
    
}