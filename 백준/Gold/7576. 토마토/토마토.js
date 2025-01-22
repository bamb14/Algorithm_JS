const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');
const [m, n] = a.shift().split(" ").map(Number);

const directions = [[1, 0], [0, 1], [0, -1], [-1, 0]];
let map = Array.from(Array(n), () => new Array(m));
let queue = [];
let unripe = 0;

// 초기화
for (let i = 0; i < n; i++) {
    const row = a.shift().split(' ').map(Number);
    for (let j = 0; j < m; j++) {
        map[i][j] = row[j];
        if (row[j] === 1) {
            queue.push([i, j]); // 익은 토마토의 좌표
        }
        if (row[j] === 0) {
            unripe++; // 익지 않은 토마토 개수
        }
    }
}

// BFS
let answer = 0;
let front = 0;

while (front < queue.length) {
    const size = queue.length; // 현재 레벨의 노드 수
    let progressed = false; // 이번 단계에서 익은 토마토가 있는지 확인

    for (let i = front; i < size; i++) {
        const [currX, currY] = queue[front++];
        for (const [dx, dy] of directions) {
            const x = currX + dx;
            const y = currY + dy;

            // 범위를 벗어나거나, 이미 익었거나, 벽인 경우
            if (x < 0 || x >= n || y < 0 || y >= m || map[x][y] !== 0) {
                continue;
            }

            // 토마토를 익게 만듦
            map[x][y] = 1;
            queue.push([x, y]);
            unripe--; // 익지 않은 토마토 감소
            progressed = true;
        }
    }

    if (progressed) {
        answer++; // 단계 진행
    }
}

// 결과 출력
console.log(unripe === 0 ? answer : -1);
