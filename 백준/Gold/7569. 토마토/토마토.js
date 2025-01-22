const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');
const [m, n, h] = a.shift().split(" ").map(Number);

const directions = [[0, 1, 0], [0, 0, 1], [0, 0, -1], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];
let map = Array.from({ length: h }, () =>
    Array.from({ length: n }, () => Array(m))
);

let queue = [];
let unripe = 0;

// 초기화
for (let k = 0; k < h; k++) {
    for (let i = 0; i < n; i++) {
        const row = a.shift().split(' ').map(Number);
        for (let j = 0; j < m; j++) {
            map[k][i][j] = row[j];
            if (row[j] === 1) {
                queue.push([k, i, j]); // 익은 토마토의 좌표
            }
            if (row[j] === 0) {
                unripe++; // 익지 않은 토마토 개수
            }
        }
    }
}

let answer = 0;
let front = 0;

function bfs() {
    if (unripe === 0) return 0; // 이미 모두 익은 경우

    while (front < queue.length) {
        const size = queue.length - front; // 현재 레벨의 노드 수
        let isRipe = false;

        for (let j = 0; j < size; j++) {
            const [currZ, currX, currY] = queue[front++]; // 큐에서 요소 제거

            for (const [dz, dx, dy] of directions) {
                const z = currZ + dz;
                const x = currX + dx;
                const y = currY + dy;

                if (x < 0 || x >= n || y < 0 || y >= m || z < 0 || z >= h) continue;
                if (map[z][x][y] === 0) {
                    map[z][x][y] = 1; // 익은 토마토로 갱신
                    queue.push([z, x, y]); // 새로 익은 토마토를 큐에 추가
                    unripe--;
                    isRipe = true;
                }
            }
        }

        if (isRipe) {
            answer++; // 단계 증가
        }
    }

    return unripe === 0 ? answer : -1; // 모든 토마토가 익었는지 확인
}

console.log(bfs());
