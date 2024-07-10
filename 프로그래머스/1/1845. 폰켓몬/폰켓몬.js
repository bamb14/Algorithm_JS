function solution(nums) {
    const answer = [...new Set(nums)];
    const len = answer.length;
    const max=~~nums.length/2;
    return len<=max? len: max;
}

