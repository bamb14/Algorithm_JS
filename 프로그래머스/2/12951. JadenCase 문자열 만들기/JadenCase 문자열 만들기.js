function solution(s) {
    s=s.split(" ");
    for(i in s){
         if (s[i] !== '') {
            const upper=s[i][0].toUpperCase();
            const lower=s[i].slice(1,).toLowerCase();
            s[i]=upper+lower;
         }
        console.log(s);
    }
    return s.join(' ');
}