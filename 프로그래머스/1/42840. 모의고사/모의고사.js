function solution(answers) {
    const len=answers.length;
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const scores = [0, 0, 0];

    for (let i = 0; i < len; i++) {
        if (answers[i] === first[i % 5]) scores[0]++;
        if (answers[i] === second[i % 8]) scores[1]++;
        if (answers[i] === third[i % 10]) scores[2]++;
    }

    const maxScore = Math.max(...scores);
    const result = [];

    for (let i = 0; i < 3; i++) {
        if (scores[i] === maxScore) {
            result.push(i + 1);  
        }
    }

    return result;
}
