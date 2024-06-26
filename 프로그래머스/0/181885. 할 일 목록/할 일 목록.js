function solution(todo_list, finished) {
    let list=[];
    for(let i=0; i<finished.length; i++){
        if(finished[i]===false) list.push(i);
    }
    return list.map(index=>todo_list[index]);
}