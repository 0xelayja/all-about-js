
let usernameAnything;

document.getElementById('onclickBtn').onclick = function (){
  usernameAnything = document.getElementById('input').value;
  document.getElementById('myH1').textContent = (`Did you know there's actually a reason why you put "${usernameAnything}"?`)
  console.log(usernameAnything);
}