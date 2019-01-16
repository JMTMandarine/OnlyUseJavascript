// camel : 시작은 소문자, space(띄어쓰기)가 필요하다고 생각될경우 대문자로 구분
// const daysOfWeek;

const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(mon, tue, wed, thu, fri);

// 위처럼 하나씩 선언하지 않고 배열을 만들자
const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

console.log(daysOfWeek);
// Array는 0부터 시작됨
console.log(daysOfWeek[0]); // Mon
console.log(daysOfWeek[1]); // Tue
console.log(daysOfWeek[2]); // Wed
console.log(daysOfWeek[3]); // Thu
console.log(daysOfWeek[4]); // Fri
console.log(daysOfWeek[5]); // Sat
console.log(daysOfWeek[6]); // Sun

// 변수도 넣을수 있음
const vDaysOfWeek = [mon, tue, wed, thu, fri];
console.log(vDaysOfWeek);