
window.onload = function(){
  // console.log(document.getElementById('list').firstChild.firstChild);
  // document.getElementById('list').firstChild.firstChild.setAttribute('color', 'red');
}


let addTask = function(){
  let liNode = document.createElement('li');
  let textNode = document.createTextNode(document.getElementById('input').value);
  li.addEventListener('click', () => setDone(liNode));
  document.getElementById('list').appendChild(liNode).appendChild(textNode);
}

let setDone = function(element){
  console.log('タスクが押されたぞ！');
}
