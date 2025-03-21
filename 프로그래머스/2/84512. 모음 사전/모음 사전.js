function solution(word) {
    let vowel=['A','E', 'I', 'O', 'U'];
    let result=[];
    let list=[];
    for(let i=1; i<=5; i++){
        dfs(list, i);
    }
    
    function dfs(list, length){
        if(list.length===length){
            result.push(list.join(''));
            return;
        }
        for(let i=0; i<vowel.length; i++){
            list.push(vowel[i]);
            dfs(list, length);
            list.pop();
        }
    }
    result.sort();
    return result.indexOf(word)+1;
}