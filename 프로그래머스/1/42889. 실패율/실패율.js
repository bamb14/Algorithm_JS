function solution(N, stages) {
    let rate=[];
    const len=stages.length;
    for(let i=1; i<=N; i++){
        const players=stages.filter((a)=>a>=i).length;
        const failed=stages.filter((a)=>a===i).length;
        rate.push([i, failed / players]);
    }
    rate.sort((a, b) => b[1] - a[1] || a[0] - b[0]);

    return rate.map(stage => stage[0]);
}