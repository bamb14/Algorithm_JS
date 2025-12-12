function solution(s) {
    s=s.slice(1,s.length-1);
    const list=[];
    for(let i=0; i<s.length; i++){
        if(s[i]==='{'){
            i++;
            const arr=[];
            let num='';
            while(s[i]!=='}'){
                if(s[i]!==',') num+=s[i];
                else{
                    arr.push(Number(num));
                    num='';
                }
                i++;
            }
            if(num!=='') arr.push(Number(num));
            list.push(arr);
        }
    }
    const answer=[];
    
    list.sort((a,b)=>a.length-b.length);
    const set=new Set();
    for(const item of list){
        for(const n of item){
            if(!set.has(n)) answer.push(n);
            set.add(n);
        }
    }
    return answer;
}