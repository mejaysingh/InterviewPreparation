// DATE: 16-4-2024
// COMPANY: UST - R3 - Arun

/*
Q.1.write a program to give output like
console.log(characterOccuracne("sandeep Kumar Agarahari"))
output :  {
  s: 1,
  a: 5,
  n: 1,
  d: 1,
  e: 2,
  p: 1,
  K: 1,
  u: 1,
  m: 1,
  r: 3,
  A: 1,
  g: 1,
  h: 1,
  i: 1
}
*/

// function characterOccurance(str){
//     const result = {}
//     for(let char of str){
//         if(char !== ' '){
//             if(result[char]){
//                 result[char]++;
//             }else{
//                 result[char] = 1
//             }
//         }
//     }
//     return result
// }

// console.log(characterOccurance("sandeep Kumar Agarahari"))

//-------------------

/*
Q.2. reverse each word of sentence
const name = 'Welcome to UST'
emocleW ot TSU
*/

// function reverseWord(){
//     const name = 'Welcome to UST'
//     return name.split(' ').map( (word) => word.split('').reverse().join('') ).join(' ')
// }

// console.log(reverseWord())

//-------------------

/*
Q.3. Write output for given & covert it into async
*/

function first() {
  new Promise((res, rej) => res("apple")).then((data) => console.log(data));
  console.log("banana");
}
first();
//banana
//apple

async function second() {
  await new Promise((res, rej) => res("apple")).then((data) =>
    console.log(data)
  );
  console.log("banana");
}
second();
//apple
//banana
