function solution(s) {
    const len=s.length;
    if(len!==4&&len!==6)return false;
    for(let i=0; i<len; i++){
        if(isNaN(s[i]))return false;
    }
    return true;
}