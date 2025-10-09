const discount_list=[10, 20, 30, 40];
const answer=[0,0];
function solution(users, emoticons) {
    dfs([], 0, users, emoticons);
    
    return answer;
}

function dfs(arr, size, users, emoticons){
    if(size===emoticons.length) {
        let people=0;
        let total=0;
        const copy=new Array(size);
        for(let i=0; i<size; i++){
            copy[i]=emoticons[i]*(100-arr[i])/100;          
        }
//        console.log(copy);
        for(let [rate, amount] of users){
            let sum=0;
            for(let i=0; i<size; i++){
                if(rate<=arr[i]){
                    sum+=copy[i];
                }
            }
            if(sum>=amount){
                people++;
            }else{
                total+=sum;
            }
        }
        
        if(answer[0]<people){
            answer[0]=people;
            answer[1]=total;
        }else if(answer[0]===people && answer[1]<total){
            answer[0]=people;
            answer[1]=total;
        }
        return;
    }

    for(const discount of discount_list){
        arr.push(discount);
        dfs(arr, size+1, users, emoticons);
        arr.pop();
    }
}