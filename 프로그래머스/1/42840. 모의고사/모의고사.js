function solution(answers) {
    const len=answers.length;
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const scores = [0, 0, 0];  // 각각의 학생이 맞힌 문제 수를 저장

    for (let i = 0; i < len; i++) {
        if (answers[i] === first[i % first.length]) scores[0]++;
        if (answers[i] === second[i % second.length]) scores[1]++;
        if (answers[i] === third[i % third.length]) scores[2]++;
    }

    const maxScore = Math.max(...scores);  // 가장 높은 점수 찾기
    const result = [];

    for (let i = 0; i < 3; i++) {
        if (scores[i] === maxScore) {
            result.push(i + 1);  // 학생 번호는 1부터 시작하므로 i+1
        }
    }

    return result;
}
