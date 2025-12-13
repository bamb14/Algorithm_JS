function solution(people, limit) {
    people.sort((a,b)=>b-a);
    let left=0, right=people.length-1;
    let cnt=0;
    while(left<right){
        if(people[left]+people[right]<=limit) right--;
        left++;
        cnt++;
    }
    if(left===right) cnt++;
    return cnt;
}