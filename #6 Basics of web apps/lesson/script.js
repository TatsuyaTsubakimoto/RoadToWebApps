// console.log(document);

// $(function() {
//   // テキストを取得
//   console.log($('h1').text());
//   // テキストを変更
//   $('h1').text('new text');
//   // 色を変更
//   $('h1').css('color', 'red');
//   // 複数の要素を取得
//   console.log($('li').text());
//   // 複数の要素から一つを選択して取得
//   console.log($('li').eq(0).text());
//   // 要素を追加
//   $('ul').append('<li>jQueryで追加されたタスク</li>');
// });

// タスクを追加
let addTask = function(){
  // インプットの文字を取得
  let text = $('input').val();
  // 要素を追加
  $('ul').append('<li>' + text + '</li>');
  // インプットを空にする
  $('input').val('');
}

// 全ての liタグ にonclickを追加
$(document).on('click', 'li', function(){
  // liタグ自身の取り消し線を表示
  $(this).css('text-decoration', 'line-through');
});
