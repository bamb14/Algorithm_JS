function solution(participant, completion) {
    const map = new Map();

    // 참가자 명단을 순회하면서 각 참가자의 이름과 등장 횟수를 기록
    for (const person of participant) {
        if (map.has(person)) {
            map.set(person, map.get(person) + 1);
        } else {
            map.set(person, 1);
        }
    }

    // 완주자 명단을 순회하면서 각 참가자의 등장 횟수를 차감
    for (const person of completion) {
        if (map.has(person)) {
            map.set(person, map.get(person) - 1);
        }
    }

    // 등장 횟수가 1인 참가자가 완주하지 못한 사람
    for (const [key, value] of map) {
        if (value > 0) {
            return key;
        }
    }
}
