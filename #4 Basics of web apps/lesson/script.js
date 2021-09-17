// console.log(document);

$(function() {
  // テキストを取得
  console.log($('h1').text());
  // テキストを変更
  $('h1').text('new text');
  // 色を変更
  $('h1').css('color', 'red');
  // 複数の要素を取得
  console.log($('li').text());
  // 複数の要素から一つを選択して取得
  console.log($('li').eq(0).text());
});
