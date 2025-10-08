/*
const ROLL = document.getElementById('ROLL');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const max = 100;
const min = 1;
let randomNumb1;
let randomNumb2;
let randomNumb3;


document.getElementById('ROLL').onclick = function(){
  randomNumb1 = Math.floor(Math.random() * max) + min; 
  randomNumb2 = Math.floor(Math.random() * max) + min;
  randomNumb3 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNumb1
  label2.textContent = randomNumb2
  label3.textContent = randomNumb3
}
  */



const ROLL = document.getElementById('ROLL');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const max = 200;
const min = 100;
let randomNumb1;
let randomNumb2;
let randomNumb3;


document.getElementById('ROLL').onclick = function(){
  randomNumb1 = Math.floor(Math.random() * (max - min)) + min; 
  randomNumb2 = Math.floor(Math.random() * (max - min)) + min;
  randomNumb3 = Math.floor(Math.random() * (max - min)) + min;
  label1.textContent = randomNumb1;
  label2.textContent = randomNumb2;
  label3.textContent = randomNumb3;
}

