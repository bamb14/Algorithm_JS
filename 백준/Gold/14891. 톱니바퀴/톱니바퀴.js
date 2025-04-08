const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

let wheels=[];
for(let i=0; i<4; i++){
  wheels[i+1]=input[i].split('').map(Number);
}

let k=input[4];
// let rotate=[0,0,0,0,0];
for(let i=0; i<k; i++){
  const [wheel, dir]=input[i+5].split(' ').map(Number);
  
    
  // 오른쪽 비교
  if(wheel!==4){
    check(wheel, dir, true);
  }
  // 왼쪽 비교
  if(wheel!==1){
    check(wheel, dir, false);
  }
  
  rotate(wheel, dir); // 현재 바퀴 회전

}

let total=0;
for(let i=1; i<=4; i++){
  if(wheels[i][0]) total+=2**(i-1);
}
console.log(total);
function check(wheel, dir, isRight){
  if(isRight){
    if(wheel>=4) return;
    if(wheels[wheel][2]!==wheels[wheel+1][6]){
      check(wheel+1, -dir, true);
      rotate(wheel+1, -dir);
    }
    
  }else{
    if(wheel<=1) return;
    if(wheels[wheel][6]!==wheels[wheel-1][2]){
      check(wheel-1, -dir, false);
      rotate(wheel-1, -dir);
    }
  }
}

function rotate(wheel, dir){
  if(dir===1){
    const end=wheels[wheel].pop();
    wheels[wheel].unshift(end);
  }else{
    const start=wheels[wheel].shift();
    wheels[wheel].push(start);
  }
}

