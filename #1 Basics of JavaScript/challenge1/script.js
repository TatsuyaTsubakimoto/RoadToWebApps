console.log('ssss');

let tax_food = 1.08;
let tax_other = 1.10;

let income = 200000;
let array = [1200, 1000, 3500, 29800, 11212];


// 個別に表示
console.log('昼食:'+array[0]*tax_other);
console.log('テイクアウト:'+array[1]*tax_food);
console.log('スーパー:'+array[2]*tax_food);
console.log('スマホ:'+array[3]*tax_other);

let total = 0;

// 和を計算
for(let i=0; i<array.length; i++){
  total = total + array[i];
}

// 収支を表示
console.log('収支：'+ (income - total));

// 高すぎる金額を見つけてアラート
for(let i=0; i<array.length; i++){
  if(array[i] > 10000){
    // alert(array[i]+'円は高すぎるよ');
  }
}


console.log('合計:'+total);
