const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

let index=0;
let answer=[];
while(input[index]!=='end'){
  answer.push(solution(input[index]));
  index++;
}
console.log(answer.join('\n'));

function solution(map){
  let flag='invalid';
  let Xline = false;
  let Oline = false;
  let x=0, o=0, empty=0;
  
  for(const char of map){
    if(char==='X') x++;
    else if(char==='O') o++;
    else empty++;
  }
  
  // 특정 하나로 몰렸을 때
  if(Math.abs(x-o)>=2) return 'invalid';
  
  // O가 X보다 많을 때
  if(o>x) return 'invalid';
  
  // 가로
  for(let i=0; i<9; i+=3){
    if(map[i]!=='.' && map[i]===map[i+1] && map[i+1]===map[i+2]){
      if (!check(map[i], x, o)) return 'invalid';
      if (map[i] === 'X') Xline = true;
      if (map[i] === 'O') Oline = true;
    }
  }
  // 세로 완성
  for(let i=0; i<3; i++){
    if(map[i]!=='.' && map[i]===map[i+3] && map[i+3]===map[i+6]){
      if (!check(map[i], x, o)) return 'invalid';
      if (map[i] === 'X') Xline = true;
      if (map[i] === 'O') Oline = true;
    }
  }
  // 대각선 완성
  if(map[0]!=='.' && map[0]===map[4] && map[4]===map[8]){
    if (!check(map[0], x, o)) return 'invalid';
    if (map[0] === 'X') Xline = true;
    if (map[0] === 'O') Oline = true;
  }
  if(map[2]!=='.' && map[2]===map[4] && map[4]===map[6]){
    if (!check(map[2], x, o)) return 'invalid';
    if (map[2] === 'X') Xline = true;
    if (map[2] === 'O') Oline = true;
  }
  // 둘 다 우승
  if (Xline && Oline) return 'invalid';
  
  // 승리자 없고 빈칸 있음
  if (!Xline && !Oline && empty > 0) return 'invalid';

  return 'valid';
}

function check(char, x, o){
  if (char === 'X') return x === o + 1;
  if (char === 'O') return x === o;
  return false;
}