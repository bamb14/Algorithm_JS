function solution(s) {
    const list=s.slice(2,-2).split('},{').map(str=>str.split(',').map(Number));
    list.sort((a,b)=>a.length-b.length);
    const answer=[];
    const set=new Set();
    for(const item of list){
        for(const n of item){
            if(!set.has(n)) answer.push(n);
            set.add(n);
        }
    }
    return answer;
}
