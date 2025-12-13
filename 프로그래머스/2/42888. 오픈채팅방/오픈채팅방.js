function solution(record) {
    const user=new Map();
    const result=[];
    for(const str of record){
        const [command, id, name]=str.split(' ');
        if(command=='Enter'){
            user.set(id, name);
            result.push([id,'님이 들어왔습니다.']);
        }
        else if(command=='Leave'){
            result.push([id,'님이 나갔습니다.']);
        }
        else if(command=='Change'){
            user.set(id, name);
        }
    }
    for(let i=0; i<result.length; i++){
        const [id, str]=result[i];
        result[i]=user.get(id)+str;
    }
    return result;
}