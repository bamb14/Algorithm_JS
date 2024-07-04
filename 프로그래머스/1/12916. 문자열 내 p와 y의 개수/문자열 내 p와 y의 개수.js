function solution(s){
    var answer = s.toLowerCase();
    const len=s.length;
    let p_num=0;
    let y_num=0;
    for(let i=0; i<len; i++){
        if(answer[i]==='p') p_num++;
        else if(answer[i]==='y') y_num++;
    }
    if(p_num===y_num) return true;
    else return false;
}


