function solution(clothes) {
    let answer=1;
    const map=new Map()
    for(const [item, category] of clothes){
        if(map.has(category)) map.set(category, map.get(category)+1)
        else map.set(category, 1)
    }
    const keysArray = Array.from(map.keys());

    for (const key of keysArray) {
        answer *= map.get(key) +1
        console.log(answer)
    }

    return answer-1
}

