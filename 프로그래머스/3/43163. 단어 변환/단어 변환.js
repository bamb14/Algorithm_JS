function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    let map = new Map();
    
    for(let i=0; i<words.length-1; i++){
        for(let j=i+1; j<words.length; j++){
            const word1=words[i];
            const word2=words[j];
            let same=0;
            for(let i=0; i<word1.length; i++){
                if(word1[i]===word2[i]) same++;
            }
            if(word1.length-same===1){
                if (!map.has(word1)) map.set(word1, []);
                if (!map.has(word2)) map.set(word2, []);
                
                map.get(word1).push(word2);
                map.get(word2).push(word1);
            }
        }
    }
    
    let visited=new Set();
    let queue=[];
    for(const word of words){
        let same=0;
        for(let j=0; j<word.length; j++){
            if(word[j]===begin[j]) same++;
        }
        if(word.length-same===1) queue.push([word,1]);
    }
    
    while(queue.length){
        const [word, count]=queue.shift();
        if(word===target) return count;
        visited.add(word);
        for(const link of map.get(word)){
            if(!visited.has(link)) queue.push([link, count+1]);
        }
    }
    
}