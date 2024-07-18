function solution(n) {
    let result=new Array(n+1).fill(true);
    result[0]=result[1]=false;
    let total=[];
    for(let i=2;i<=n;i++){
        if(result[i]){
            total.push(i);
            for(let j=i*i;j<=n;j+=i){
                result[j]=false;
            }
        }
    }
    return total.length
}