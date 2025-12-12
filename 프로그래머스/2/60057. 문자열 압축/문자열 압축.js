function solution(s) {
    let result=s;
    for(let len=1; len<=s.length; len++){
        let prev=s.slice(0,len);
        let cnt=1;
        let string='';
        let i=len;
        while(i<=s.length){
            const target=s.slice(i, i+len);
            if(prev==target) cnt++;
            else{
                if(cnt==1) string+=prev;
                else string+=String(cnt)+prev;
                cnt=1;
                prev=target;
            }
            i+=len;
            if(i>s.length) string+=target;
        }
        
        if(result.length>string.length){
            result=string;
        }
    }
    return result.length;
}