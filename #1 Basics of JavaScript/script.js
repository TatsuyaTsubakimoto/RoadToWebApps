console.log('ssss');

let tax_food = 1.08;
let tax_other = 1.10;

let income = 200000;
let name = ['昼食', 'テイクアウト', 'スーパー', 'スマホ', 'ホテル'];
let value = [1200, 1000, 3500, 29800, 11212];
let total = 0;

// 個別に表示
// console.log('昼食:'+array[0]*tax_other);
// console.log('テイクアウト:'+array[1]*tax_food);
// console.log('スーパー:'+array[2]*tax_food);
// console.log('スマホ:'+array[3]*tax_other);

for(let i=0; i<value.length; i++){
  console.log(name[i]+': '+value[i]);
}


// 和を計算
for(let i=0; i<value.length; i++){
  total = total + value[i];
}

console.log('収支：'+ (income - total));

// 高すぎる金額を見つけてアラート
for(let i=0; i<value.length; i++){
  if(value[i] > 10000){
    // alert(array[i]+'円は高すぎるよ');
  }
}


console.log('合計:'+total);

// 1~10までの話をとるプログラム
let result = 0;

for(let i=0; i<10; i++){
  result = result + i+1;
}
console.log(result);
