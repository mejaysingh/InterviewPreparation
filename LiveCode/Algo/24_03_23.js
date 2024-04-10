// UST Global - Manoj M - R1

//Q.1
var num= 1;
num.name = "";
console.log(num);
//{name=""}
//= Wrong = 1
//--------------------------------

//Q.2
console.log(x)
//undefined
//= Correct
var x = 1;
//--------------------------------

//Q.3
// console.log(ab)
// ab not defined
//= Partialy Wrong = can not access before initialization
let ab = 1;
//--------------------------------

//Q.4
console.log(typeof(NaN))
// number
// NOT ANSWERED
//--------------------------------

//Q.5
function samples() {
  var a = 2;
  if(true) {
  var a = 3
  console.log(a);
  //3
  }
  console.log(a);
  //3
}
//function not called so no logs
// Partialy Wrong/Correct
//--------------------------------

//Q.6
for(var i=0;i<4;i++){
  setTimeout(()=>{
    console.log(i)
  },100)}
//4 4 4 4
// Correct
//--------------------------------

//Q.7 Write a function to reverse the given string
let sample = "Hi how are you" //iH who era uoy

// iterate & split each word & reverse & join & return
// 

function reverseWord(str){
  let splitStr = str.split(' ');
  let result = splitStr.map( (val) => {
    return val.split('').reverse().join('')
  }).join(' ')
  
  return result
} 

console.log(reverseWord(sample))
// Correct
//--------------------------------