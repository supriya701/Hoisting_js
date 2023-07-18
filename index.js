//HOISTING CONCEPT
function real() {
  console.log('I am real');
}
function real() {
  console.log('No,I am real');
}
real();
function real() {
  console.log('You both are wasted,I am real...');
}
//----------------------------------------------------
console.log(varName);
var varName;
varName = 'Captain America';
fn();
function fn() {
  console.log('Hello I am fn');
}
fn();
//fnContainer();//It will give error fn expression can't be hoisted
var fnContainer = function () {
  console.log('I am a function expression');
};
fnContainer();
