const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const answer=[];
for(let i=0; i<input.length-1; i++){
  const map=input[i].split('');
  answer.push(solution(map));
}
console.log(answer.join('\n'));

function solution(map){
  let x_cnt=0, o_cnt=0, empty=0;
  
  let flag='invalid';
  let Xline = false;
  let Oline = false;
  
  for(const char of map){
    if(char==='X') x_cnt++;
    else if(char==='O') o_cnt++;
    else empty++;
  }
  // O이 X보다 많을 때
  if(o_cnt>x_cnt) return 'invalid';
  
  // 성공했는지
  // 가로
  for(let i=0; i<9; i+=3){
    if(map[i]!=='.' && map[i]===map[i+1] && map[i+1]===map[i+2]){
      if (!check(map[i], x_cnt, o_cnt)) return 'invalid';
      if (map[i] === 'X') Xline = true;
      if (map[i] === 'O') Oline = true;
    }
  }
  // 세로 완성
  for(let i=0; i<3; i++){
    if(map[i]!=='.' && map[i]===map[i+3] && map[i+3]===map[i+6]){
      if (!check(map[i], x_cnt, o_cnt)) return 'invalid';
      if (map[i] === 'X') Xline = true;
      if (map[i] === 'O') Oline = true;
    }
  }
  // 대각선 완성
  if(map[0]!=='.' && map[0]===map[4] && map[4]===map[8]){
    if (!check(map[0], x_cnt, o_cnt)) return 'invalid';
    if (map[0] === 'X') Xline = true;
    if (map[0] === 'O') Oline = true;
  }
  if(map[2]!=='.' && map[2]===map[4] && map[4]===map[6]){
    if (!check(map[2], x_cnt, o_cnt)) return 'invalid';
    if (map[2] === 'X') Xline = true;
    if (map[2] === 'O') Oline = true;
  }
  // 둘 다 우승
  if (Xline && Oline) return 'invalid';
  
  // 승리자 없고 빈칸 있음
  if (!Xline && !Oline && empty > 0) return 'invalid';

  return 'valid';
}

function check(char, x_cnt, o_cnt){
  if (char === 'X') return x_cnt === o_cnt + 1;
  if (char === 'O') return x_cnt === o_cnt;
  return false;
}