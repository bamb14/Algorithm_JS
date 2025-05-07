function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0); // 다리 위 상태
    let totalWeight = 0;

    while (truck_weights.length > 0 || totalWeight > 0) {
        time++;

        // 1초 경과 → 다리 앞부분 트럭 제거
        totalWeight -= bridge.shift();

        // 다음 트럭이 올라갈 수 있으면
        if (truck_weights.length > 0 && totalWeight + truck_weights[0] <= weight) {
            let truck = truck_weights.shift();
            bridge.push(truck);
            totalWeight += truck;
        } else {
            // 아니면 0 (빈 공간)
            bridge.push(0);
        }
    }

    return time;
}
