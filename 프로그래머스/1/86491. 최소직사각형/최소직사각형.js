function solution(sizes) {
    let list=sizes.map(item=>item.sort((a,b)=>a-b))
    
    let width=sizes[0][0]
    let height=sizes[0][1]
    for(let i=1; i<sizes.length; i++){
        width=Math.max(width, sizes[i][0])
        height=Math.max(height, sizes[i][1])
    }
    return width*height
}