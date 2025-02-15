function solution(genres, plays) {
    var answer = [];
    const group={}
    for(let i=0; i<genres.length; i++){
        const key=genres[i]
        if (!group[key]) {
            group[key] = [];
        }
        group[key].push([i,plays[i]])
    }
    const keys=Object.keys(group);

    keys.sort((a,b)=>{
        const sum1=group[a].reduce((curr,next)=>curr+next[1],0)
        const sum2=group[b].reduce((curr,next)=>curr+next[1],0)
        return sum2-sum1
    })
    for(const key of keys){
        group[key].sort((a,b)=>b[1]-a[1])
        console.log(group[key])
        if(group[key].length===1) answer.push(group[key][0][0])
        else answer.push(group[key][0][0],group[key][1][0])
    }
    
    return answer;
}