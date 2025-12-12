function solution(orders, course) {
    const answer=[];
    for(const len of course){
        const result=[];
        for(const order of orders){
            if(order.length>=len){
                bt([], 0, len, order, result);
            }
        }
        const map=new Map();
        let max=0;
        for(const comb of result){
            const cnt=map.get(comb) || 0;
            map.set(comb, cnt+1);
            max=Math.max(max, cnt+1);
        }
        
        if(max>=2){
            for(const [key,  value] of map.entries()){
                if(value==max) answer.push(key);
            }
        }
    }
    
    return answer.sort();
}

function bt(arr, idx, len, order, result){
    if(arr.length>=len){
        result.push([...arr].sort().join(''));
        return;
    }
    for(let i=idx; i<order.length; i++){
        arr.push(order[i]);
        bt(arr, i+1, len, order, result);
        arr.pop();
    }
}
