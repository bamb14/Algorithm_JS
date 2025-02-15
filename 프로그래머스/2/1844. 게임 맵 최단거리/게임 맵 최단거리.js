function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    let queue = [];
    const list = [[1, 0], [0, 1], [0, -1], [-1, 0]];

    if (n === 1 && m === 1) return 1;

    // 🔹 초기 두 방향 탐색
    for (let i = 0; i < 2; i++) {
        let x = 0 + list[i][0];
        let y = 0 + list[i][1];

        // 🔹 배열 범위 검사 추가
        if (x < 0 || x >= n || y < 0 || y >= m) continue;

        if (x === n - 1 && y === m - 1) {
            return 2;
        }

        if (maps[x][y] === 1) {
            maps[x][y] = 2;
            queue.push([x, y]);
        }
    }

    let index = 0;
    while (index < queue.length) {
        if (queue.length === 0) break; // 🔹 큐가 비어 있는지 확인

        let current = queue[index++];
        
        for (let i = 0; i < list.length; i++) {
            let x = current[0] + list[i][0];
            let y = current[1] + list[i][1];

            // 🔹 범위 초과 예외 방지
            if (x < 0 || x >= n || y < 0 || y >= m || !maps[x]) continue;

            if (x === n - 1 && y === m - 1) {
                return maps[current[0]][current[1]] + 1;
            }
            if (maps[x][y] === 1) {
                maps[x][y] = maps[current[0]][current[1]] + 1;
                queue.push([x, y]);
            }
        }
    }
    
    return -1;
}
