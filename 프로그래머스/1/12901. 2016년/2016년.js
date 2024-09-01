function solution(a, b) {
    const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const dateObj = new Date(`2016-${a}-${b}`);
    const dayOfWeek = daysOfWeek[dateObj.getDay()];
    return dayOfWeek;
}