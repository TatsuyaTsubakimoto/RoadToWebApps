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

// さまざまな計算結果
console.log('足し算：'+ (15 + 4));  // 19
console.log('引き算：'+ (15 - 4));  // 11
console.log('掛け算：'+ (15 * 4));  // 60
console.log('割り算：'+ (15 / 4));  // 3.75
console.log('割り算余り：'+ (15 % 4));  // 3
