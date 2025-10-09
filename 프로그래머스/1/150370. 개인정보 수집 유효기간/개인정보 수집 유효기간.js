function solution(today, terms, privacies) {
    var answer = [];
    const map=new Map();
    for(const info of terms){
        const [term, month]=info.split(' ');
        map.set(term, month);
    }
    
    for(let i=0; i<privacies.length; i++){
        const [date, term]=privacies[i].split(' ');
        const diff=calculate(date, today);

        if(diff>=map.get(term)*28) answer.push(i+1);
    }
    return answer;
}

function calculate(date, today){
    const [year, month, day]=date.split('.').map(Number);
    const [today_year, today_month, today_day]=today.split('.').map(Number);
    
    return (today_year-year)*12*28 + (today_month-month)*28 + (today_day-day);
}