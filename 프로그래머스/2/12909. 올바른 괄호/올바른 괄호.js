function solution(s) {
    const stack=[];
    
    for(const char of s){
        if(char===')'){
            if(stack[stack.length-1]==='(') stack.pop();
            else return false;
        }
        else stack.push(char);
    }
    return stack.length>0 ? false: true;
}
