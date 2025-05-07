function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=>b-a);
    let n=citations.length;
    for(let i=0; i<n; i++){
        let h=citations[i];
        if(h>=i+1) answer=i+1;
    }
    return answer;
}