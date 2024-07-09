function solution(s) {
    var answer='';
    var en='';
    let NumEN = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    };
    const len=s.length;
    for(let i=0; i<len; i++){
        if(!isNaN(s[i])){
            answer+=s[i];
        }
        else en+=s[i];
        if (en in NumEN) {
            answer+=NumEN[en];
            en='';
            }
    }
    return Number(answer);
}