function solution(my_string, alp) {
    let str='';
    for(let i=0; i<my_string.length; i++){
        
        if(my_string[i]===alp) str+=alp.toUpperCase();
        else str+=my_string[i];
    }
    return str;
}