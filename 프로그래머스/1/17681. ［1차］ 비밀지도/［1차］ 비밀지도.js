function solution(n, arr1, arr2) {
    const map1=arr1.map(a=>a.toString(2).padStart(n, '0'));
    const map2=arr2.map(a=>a.toString(2).padStart(n, '0'));
    const map = Array.from({ length: n }, () => Array(n).fill(' '));
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(map1[i][j]==='1'||map2[i][j]==='1') map[i][j]='#';
        }
    }
    return map.map(row => row.join(''));
}
