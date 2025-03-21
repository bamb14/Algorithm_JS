function solution(k, dungeons) {
    let len=dungeons.length;
    let max=0;
    let visited=new Array(len).fill(1);
    let list=[];
    
    permutation([]);
    
    function permutation(current){
        if(current.length===len){ // 순열 하나 완성
            max=Math.max(max,updateMax(k, current));
            return;
        }
        for(let i=0; i<len; i++){
            if(visited[i]){
                visited[i]=0;
                current.push(dungeons[i]);
                permutation(current);
                visited[i]=1;
                current.pop();
            }
        }
    }
    
    return max;
}

function updateMax(k,list){
    let len=list.length;
    let current=k;
    let count=0;
    for(let i=0; i<len; i++){
        if(k>=list[i][0]){
            k-=list[i][1];
            count++;
        }
    }
    return count;
}