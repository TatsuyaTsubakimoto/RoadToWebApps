let tax_food = 1.08;
let tax_other = 1.10;

let income = 200000;
let array = [1200, 1000, 3500];


// 個別に表示
console.log('昼食:'+array[0]*tax_other);
console.log('テイクアウト:'+array[1]*tax_food);
console.log('スーパー:'+array[2]*tax_food);

let total = array[0] + array[1] + array[2];;
console.log('合計:'+total);

// 収支を表示
console.log('収支：'+ (income - total));
