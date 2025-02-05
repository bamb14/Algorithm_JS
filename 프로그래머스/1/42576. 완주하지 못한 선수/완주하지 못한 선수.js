function solution(participant, completion) {
    const map=new Map()
    
    for(let name of participant){
        if (map.has(name)) {
            map.set(name, map.get(name) + 1);
        } else {
            map.set(name, 1);
        }
    }
    
    for(let name of completion){
        map.set(name, map.get(name) - 1);
    }
    
    for(const [key, value] of map){
        if(value>0) return key
    }
}
