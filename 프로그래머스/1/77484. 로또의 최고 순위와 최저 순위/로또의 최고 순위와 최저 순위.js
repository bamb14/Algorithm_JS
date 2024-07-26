function solution(lottos, win_nums) {
    const rank={
        6:1,
        5:2,
        4:3,
        3:4,
        2:5,
        1:6,
        0:6
    }
    const num=[...lottos].filter(a=>a===0).length;
    const correct=lottos.filter((a)=>win_nums.includes(a)).length;
    return [rank[correct+num],rank[correct]];
}