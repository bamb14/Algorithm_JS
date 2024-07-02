function solution(arr)
{
    var answer = [];
    const len=arr.length;
    for(let i=0; i<len;){
        answer.push(arr[i]);
        // 다음 i와 다른 첫 번째 요소를 찾기 위해 현재 인덱스를 기준으로 찾기 시작
        // let Array=[...arr].slice(i+1);
        // let index=Array.findIndex(element => element !== arr[i]);
        let index=i+1;
        while (index < len && arr[index] === arr[i]) {
            index++;
        }
        i = index;
    }
    
    return answer;
}