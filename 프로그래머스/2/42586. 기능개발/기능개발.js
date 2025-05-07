function solution(progresses, speeds) {
    var answer = [];
    let end=0;
    let index=0;
    let n=progresses.length;
    while(index<n){
        // console.log(index,progresses);
        if(progresses[index]>=100){
            index++;
            let cnt=1;
            for(let i=index; i<n; i++){
                if(progresses[i]>=100){
                    cnt++;
                    index++;
                }
                else break;
            }
            // console.log(cnt);
            answer.push(cnt);
        }
        for(let i=index; i<n; i++){
            progresses[i]+=speeds[i]
        }
    }
    return answer;
}