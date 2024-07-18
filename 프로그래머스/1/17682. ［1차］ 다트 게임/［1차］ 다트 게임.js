function solution(dartResult) {
    const score={
        S:1,D:2,T:3
    };
    const regex = /\d+\D+/g;
    const result = dartResult.match(regex);
    let scores=[];
    result.forEach((part, i) => {
        // Split each part into number and the following characters
        const numRegex = /\d+/;
        const charRegex = /[SDT][*#]?/;
        const number = parseInt(part.match(numRegex)[0]);
        const chars = part.match(charRegex)[0];

        // Calculate base score
        let baseScore = Math.pow(number, score[chars[0]]);

        // Handle * and # if they exist
        if (chars[1]) {
            if (chars[1] === '*') {
                baseScore *= 2;
                if (i > 0) {
                    scores[i - 1] *= 2;
                }
            } else if (chars[1] === '#') {
                baseScore *= -1;
            }
        }

        // Push the calculated score to the scores array
        scores.push(baseScore);
    });

    // Calculate the total score
    const totalScore = scores.reduce((acc, curr) => acc + curr, 0);

    return totalScore;
}