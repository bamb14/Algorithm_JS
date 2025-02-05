function solution(n, wires) {
    let answer = n;
    // 인덱스는 0부터 전선은 1부터 시작하기 때문에 n + 1
    const graph = Array.from(Array(n + 1), () => []);
    
    // 인덱스는 노드, 해당 인덱스에 연결된 노드들을 저장
    // 각 전선을 연결된 노드들로 그래프에 추가
    for (const wire of wires) {
        let [from, to] = wire;

        graph[from].push(to);
        graph[to].push(from);
    }
    
    // start는 bfs 탐색 시작점, expect는 제외할 노드(방문하지 않을 노드)
    const bfs = (start, except) => {
        let count = 0;
        let queue = [start];
        
        let visited = new Array(n + 1).fill(0);

        visited[start] = 1;

        while (queue.length) {
            let index = queue.shift();
            // 해당 인덱스에 연결된 노드들 중
             graph[index].forEach((element) => {
                // 제외한 노드가 아니고, 방문하지 않은 노드라면
                if (element !== except && !visited[element]) {
                    // 노드 방문 후 방문 처리 true
                    visited[element] = 1;
                    // 다음 방문을 위해 queue에 담기
                    queue.push(element);
                }
            });
            // 도달한 노드의 개수 + 1
            count++;
        }
        return count;
    };
    
    for(let i=0; i<wires.length; i++){
        const [from,to]=wires[i];
        answer = Math.min(answer, Math.abs(bfs(from, to) - bfs(to, from)));
    }
    return answer;
}