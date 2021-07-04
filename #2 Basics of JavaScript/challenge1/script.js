let tax_food = 1.08;
let tax_other = 1.10;

let income = 200000;
let name = ['昼食', 'テイクアウト', 'スーパー', 'スマホ', 'ホテル'];
let value = [1200, 1000, 3500, 29800, 11212];
let total = 0;

// console.log('昼食:'+array[0]*tax_other);
// console.log('テイクアウト:'+array[1]*tax_food);
// console.log('スーパー:'+array[2]*tax_food);
// console.log('スマホ:'+array[3]*tax_other);


// 支出を個別に表示
for(let i=0; i<value.length; i++){
  console.log(name[i]+': '+value[i]);
}

// 合計を計算
for(let i=0; i<value.length; i++){
  total = total + value[i];
}

// 高すぎる金額を見つけてアラート
for(let i=0; i<value.length; i++){
  if(value[i] > 10000){
    // alert(array[i]+'円は高すぎるよ');
  }
}

// 合計を表示
console.log('合計:'+total);
// 収支を表示
console.log('収支：'+ (income - total));
