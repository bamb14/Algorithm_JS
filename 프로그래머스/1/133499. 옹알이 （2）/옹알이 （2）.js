function solution(babblings) {
    let answer = 0;

    for (let i = 0; i < babblings.length; i++) {
        let babble = babblings[i];

        // 반복적인 음절을 포함하는 경우 건너뛰기
        if (babble.includes("ayaaya") || babble.includes("yeye") || babble.includes("woowoo") || babble.includes("mama")) {
            continue;
        }

        // 음절 대체
        babble = babble.replace(/aya/g, " ");
        babble = babble.replace(/ye/g, " ");
        babble = babble.replace(/woo/g, " ");
        babble = babble.replace(/ma/g, " ");

        // 공백 제거
        babble = babble.replace(/\s+/g, "");

        // 남은 문자열이 없는 경우 카운트 증가
        if (babble.length === 0) {
            answer++;
        }
    }

    return answer;
}
