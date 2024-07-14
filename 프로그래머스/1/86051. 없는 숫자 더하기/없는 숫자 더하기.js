function solution(numbers) {
    const num = Array.from({length:10}, (v,i)=>i); 

    return num.reduce((acc, curr) => {
        return acc + (numbers.includes(curr) ? 0 : curr);
    }, 0);
}