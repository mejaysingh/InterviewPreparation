//STRING MANIPUTLATION: Reverse String

let sample = "Hi how are you"

//OUTPUT: "iH woh era uoy"

console.log('---------- METHOD 1 (inbuilt methods) ----------');
// METHOD - 1 - with inbuilt methods
function methodOne(sample){
let splitStr = sample.split(' ')
let result = splitStr.map(
    (val) => val.split('').reverse().join('') 
    ).join(' ')
  console.log(result);
}

methodOne(sample)

// METHOD - 2 - without inbuilt methods
// Iterate through each character.
// create array from given string separating each word.
// Iterate through each word array.
// create array for each word
// Iterate each word from array length to 0 & reverse
// Iterate each  & join

console.log('---------- METHOD 2 (without inbuilt methods) ----------');
//SOLUTION - METHOD 2
function methodTwo(sample){
// Iterate through each character.
// create array from given string separating each word.
function splitString(sample, separator){
    let response = []
    let temp = ''
    for (let i = 0; i < sample.length; i++) {
        if(separator === ' '){
            if(sample[i] === ' '){
                // console.log(charReverse(temp))
                response.push(temp)
                temp = ''
            }else if(i === sample.length-1){
                temp = temp + sample[i];
                response.push(temp)
                temp = ''
            }else{
                temp = temp + sample[i];
            }
        }
        // console.log(temp)
    }
    return response
}

// Iterate through each word array.
// create array for each word
function wordReverse(input){
  return wordSplit.map( (val) => charReverse(val) )
}

// Iterate each word from array length to 0 & reverse
function charReverse(input){
  let response = ''
  for(let i=input.length-1; i>=0;i --){
      response = response + input[i]
  }
  return response
}

// Iterate each word & join
function stringJoin(input, separator){
  let response = ''
  if(separator === ' '){
    input.forEach( val => {
      response = `${response} ${val}`
    });
  }
  return response
}

let wordSplit = splitString(sample, ' ')

// console.log(wordSplit)

let strReverse = wordReverse(wordSplit)

let result = stringJoin(strReverse, ' ')

console.log(result)
}

methodTwo(sample)

console.log('---------- METHOD 2 OPTIMISED ----------');
//SOLUTION - METHOD 2 OPTIMISED

function methodThree(params) {
  function reverseString(input = '', separator = ' '){
      let str = ''
      let word = ''
      for (let i = 0; i < input.length; i++) {
          let char = input[i]
          if(separator === ' '){
              if(char === ' '){
                  str = str + reverseWord(word) + separator
                  word = ''
              }else if(i === input.length-1){
                word = word + char;
                  str = str + reverseWord(word)
                  word = ''
              }else{
                  word = word + char
              }
          }else{
            console.error('Only Space Separtor Works');
          }
      }
      return str
  }
  
  function reverseWord(word){
    let response = ''
    for(let i=word.length-1; i>=0; i--){
        response = response + word[i]
    }
    return response
  }

  let result = reverseString(params)
  console.log(result);
  return {reverseWord}
}

methodThree(sample)

console.log('---------- METHOD 2 MOST OPTIMISED ----------');
//SOLUTION - METHOD 2 MOST OPTIMISED

function methodFour(params) {
  function reverseString(input = '', separator = ' '){
      let output = ''
      let word = ''
      for (let i = 0; i < input.length; i++) {
          let char = input[i]
          if(separator === ' '){
              if(char === ' '){
                  output = output + word + separator
                  word = ''
              }else if(i === input.length-1){
                  word = char + word;
                  output = output + word
                  word = ''
              }else{
                  word = char + word
              }
          }
      }
      return output
  }

  console.log(reverseString(params));
}

methodFour(sample)