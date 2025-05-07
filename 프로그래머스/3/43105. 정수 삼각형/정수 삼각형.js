function solution(triangle) {
    let height=triangle.length;
    let bottom=triangle[triangle.length-1].length;

    let dp=Array.from(Array(height), ()=>Array(bottom).fill(0));
    dp[0][0]=triangle[0][0];
    dp[1][0]=triangle[0][0]+triangle[1][0];
    dp[1][1]=triangle[0][0]+triangle[1][1];

    for(let i=2; i<height; i++){
        for(let j=0; j<i+1; j++){
            if(j===0) dp[i][j]=dp[i-1][j]+triangle[i][j];
            else if(j===i) dp[i][j]=dp[i-1][j-1]+triangle[i][j];
            else dp[i][j]=Math.max(dp[i-1][j-1], dp[i-1][j])+triangle[i][j];
        }
    }
    return Math.max(...dp[height-1]);
}