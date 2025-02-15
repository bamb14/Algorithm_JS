function solution(clothes) {
    let answer=1;
    const map=new Map()
    for(const [item, category] of clothes){
        if(map.has(category)) map.set(category, map.get(category)+1)
        else map.set(category, 1)
    }
    for(let value of map.values()){
        answer *= (value+1)
    }

    return answer-1
}

