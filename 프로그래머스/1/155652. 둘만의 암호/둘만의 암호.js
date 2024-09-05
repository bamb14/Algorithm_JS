function solution(s, skip, index) {
    let result='';
    alpa=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i=0; i<s.length; i++){
         let current = alpa.indexOf(s[i]);
        let common_count = 0;
        
        let j = 0;
        while (j < index) {
            current = (current + 1) % 26;
            if (!skip.includes(alpa[current])) {
                j++;
            }
        }
        result += alpa[current];
    }
    return result;
}