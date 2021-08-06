
window.onload = function(){
  // console.log(document.getElementById('list').firstChild.firstChild);
  // document.getElementById('list').firstChild.firstChild.setAttribute('color', 'red');
}


let addTask = function(){
  let li = document.createElement('li');
  let text = document.createTextNode(document.getElementById('input').value);
  li.addEventListener('click', () => setDone(li));
  document.getElementById('list').appendChild(li).appendChild(text);
}

let setDone = function(element){
  console.log('タスクが押されたぞ！');
}
