function solution(numbers, hand) {
    var answer = '';
    
    // '*' and '#' 위치 초기화: '*' -> [3, 0], '#' -> [3, 2]
    let left_position = [3, 0];
    let right_position = [3, 2];
    
    // 키패드 위치 정의
    const key_positions = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        0: [3, 1], 
    };
    
    for(let i = 0; i < numbers.length; i++){
        let target = key_positions[numbers[i]];
        
        if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7){
            answer += 'L';
            left_position = target;
        } else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9){
            answer += 'R';
            right_position = target;
        } else {
            // 맨해튼 거리 계산
            let distance_left = Math.abs(left_position[0] - target[0]) + Math.abs(left_position[1] - target[1]);
            let distance_right = Math.abs(right_position[0] - target[0]) + Math.abs(right_position[1] - target[1]);
            
            if(distance_left === distance_right){
                if(hand === 'right') {
                    answer += 'R';
                    right_position = target;
                } else {
                    answer += 'L';
                    left_position = target;
                }
            } else if(distance_left < distance_right){
                answer += 'L';
                left_position = target;
            } else {
                answer += 'R';
                right_position = target;
            }
        }
    }
    
    return answer;
}
