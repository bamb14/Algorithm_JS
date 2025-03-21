function solution(k, dungeons) {
    let len=dungeons.length;

    let max=0;
    
    permutation([],dungeons);
    function permutation(current, remaining){
        if(remaining.length===0){ // 순열 하나 완성
            max=Math.max(max,updateMax(k, current));
        }
        for(let i=0; i<remaining.length; i++){
            const newCurrent=current.concat([remaining[i]]);
            const newRemaining =remaining.slice(0,i).concat(remaining.slice(i + 1));
            // console.log(newRemaining);
            permutation(newCurrent,newRemaining);
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