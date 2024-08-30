function solution(id_list, report, k) {
    dic={};
    let result=new Array(id_list.length).fill(0)
    id_list.forEach(item=>dic[item]=0);
    report=[...new Set(report)]
    report.forEach(item=>{
        item=item.split(" ");
        dic[item[1]]+=1;
    })

    report.forEach(item=>{
        item=item.split(" ");
        if(dic[item[1]]>=k){
            result[id_list.indexOf(item[0])]+=1;
        }
    })
    return result;
}