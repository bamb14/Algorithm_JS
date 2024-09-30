function solution(land) {
    let cal=land[0];
    
    for(let i=1; i<land.length; i++){
        let list=[];
        for(let j=0; j<4; j++){
            let sum=[];
            for(let k=0; k<4; k++){
                if(k==j) continue;
                sum.push(land[i][j]+cal[k]);
                // console.log(land[i-1][k]);
            }
            // console.log(sum);
            list[j]=Math.max(...sum);
        }
        cal=list;
    }
    return Math.max(...cal);
}