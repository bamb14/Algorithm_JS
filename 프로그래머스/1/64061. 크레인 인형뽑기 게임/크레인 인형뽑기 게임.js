function solution(board, moves) {
    let result=[];
    let count=0;
    for(let i=0; i<moves.length; i++){
        const move=moves[i];
        for(let j=0; j<board.length; j++){
            if(board[j][move-1]!==0){//0이 아닐 떄(인형이 있을 때)
                if(result[result.length-1]===board[j][move-1]){
                    count+=2;
                    result.pop();
                    for(let k=result.length-1; k>=0; k--){
                        if(result[k]===result[k-1]){
                            count+=2;
                            result.pop();
                            result.pop();
                        }else{
                            break;
                        }
                    }
                }
                else result.push(board[j][move-1]);
                board[j][move-1]=0;
                break;
            }
            
        }
    }
    return count;
}