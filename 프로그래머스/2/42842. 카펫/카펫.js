function solution(brown, yellow) {
    //옐로우의 가로=옐로우 전체 개수/옐로우의 세로
    //브라운의 개수=옐로우의 세로*2+옐로우의 가로*2+4
    for(let i=1; i<=yellow; i++){
        if(yellow%i===0&&brown===i*2+yellow/i*2+4){
            return [yellow/i+2,i+2]
        }
    }
}