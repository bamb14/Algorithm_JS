function solution(s, n) {
    let result='';
    alpa=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i=0; i<s.length; i++){
        if(s[i]===' ') result+=' ';
        else if(s[i]===s[i].toUpperCase()){
            const index=alpa.indexOf(s[i].toLowerCase());
            result+=alpa[(index+n)%26].toUpperCase();

        }else{
            const index=alpa.indexOf(s[i]);
            result+=alpa[(index+n)%26];
        }
    }
    return result;
}