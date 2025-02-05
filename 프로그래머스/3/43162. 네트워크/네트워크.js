function solution(n, computers) {
   let count=0;
   for(let i=0; i<n; i++){
       if(computers[i][i]){
           bfs(i,n,computers)
           count++
       }
   }
    return count
}
function bfs(i,n,computers){
    let queue=[i]
    
    while(queue.length){
        const x=queue.shift()
        if(computers[x][x]===0) continue
        else computers[x][x]=0
        
        for(let i=0; i<n; i++){
            if(computers[x][i]){
                queue.push(i)
            }
        }
    }
}