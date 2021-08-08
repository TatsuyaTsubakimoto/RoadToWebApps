$(function() {
  // $('h1').css('color', 'red');
  // $('h1').text('new text');
});

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
