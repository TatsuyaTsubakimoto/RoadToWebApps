$(function() {
  // $('h1').css('color', 'red');
  // $('h1').text('new text');
});

let addTask = function(){
  // インプットの文字を取得
  let text = $('input').val();
  // インプットの文字が空でなければ実行
  if(text!=''){
    // 要素を追加
    $('ul').append('<li>' + text + '</li>');
    // インプットを空にする
    $('input').val('');
  }
}

// 全ての liタグ にonclickを追加
$(document).on('click', 'li', function(){
  // valueが 1 の時と それ以外 の時で動きを分ける
  if($(this).val()==1){
    // liタグ自身の取り消し線を消去
    $(this).css('text-decoration', 'none').val(0);
  } else {
    // liタグ自身の取り消し線を表示
    $(this).css('text-decoration', 'line-through').val(1);
  }
});
