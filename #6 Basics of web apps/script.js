
window.onload = function(){
  // console.log(document.getElementById('list').firstChild.firstChild);
  // document.getElementById('list').firstChild.firstChild.setAttribute('color', 'red');
}


var addTask = function(){
  var li = document.createElement('li');
  var text = document.createTextNode(document.getElementById('input').value);
  li.addEventListener('click', () => setDone(li));
  document.getElementById('list').appendChild(li).appendChild(text);
  // インプットを空にする
  document.getElementById('input').value = "";
}

var setDone = function(element){
  element.setAttribute('style', 'text-decoration: line-through');
}
