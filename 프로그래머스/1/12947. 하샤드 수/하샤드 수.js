function solution(x) {
    let total=0;
    let num=x;
    total+=Math.floor(num/10000);
    num=num%10000;
    total+=Math.floor(num/1000);
    num=num%1000;
    total+=Math.floor(num/100);
    num=num%100;
    total+=Math.floor(num/10);
    num=num%10;
    total+=num;    
    
    return x%total===0? true: false;
    
}