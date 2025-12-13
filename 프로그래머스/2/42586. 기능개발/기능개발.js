function solution(progresses, speeds) {
    const answer=[];
    const n=progresses.length;
    let index=0;
    while(index<n){
        const remain=Math.ceil((100-progresses[index])/speeds[index]);
        let cnt=1;
        index++;
        while(index<n){
            const num=Math.ceil((100-progresses[index])/speeds[index])
            if(num>remain) break;
            cnt++;
            index++;
        }
        answer.push(cnt);
    }
    return answer;
}