function solution(sequence, k) {
    let left=0, right=0;
    let sum=sequence[left];
    const n=sequence.length;
    let min=Infinity;
    let start, end;
    while(left<=right && right<n){
        if(sum===k){
            if(min>right-left+1){
                min=right-left+1;
                start=left;
                end=right;
            }
        }
        if(sum>=k){
            sum-=sequence[left++];
        }
        else{
            sum+=sequence[++right];
        }
    }
    return [start, end];
}