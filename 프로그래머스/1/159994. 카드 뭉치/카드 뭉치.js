function solution(cards1, cards2, goal) {
    let card1_index=0;
    let card2_index=0;
    const len=goal.length;
    for(let i=0; i<len; i++){
        if(goal[i]===cards1[card1_index]) card1_index++;
        else if(goal[i]===cards2[card2_index]) card2_index++;
        else return "No";
    }
    return "Yes";
}