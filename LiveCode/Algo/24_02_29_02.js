// COMPANY: Capgemini - Round 1

//Q.1 write API call in with useEffect

// const API_URL = 'google.com'
// useEffect( () => {
//     fetch(API_URL)
//     .then( (result) => result.json())
//     .then( (response) => console.log(response))
//     .catch()
// },[])


/*
Q.2 write a program to cout each character occurance in given string
INPUT: i am react developer
Output:
{ i - 1
a -2
m  - 1
r-2 ....}
*/

function countWords(str){
    const output = {}
    for(let i=0; i<str.length; i++){
        let char = str[i]
        if(char !== ' '){
            output[char] = output[char] ? output[char] + 1 : 1
        }

        // if(char !== ' ' && output[char]){
        //     output[char] = output[char] + 1
        // }else if(char !== ' ')(
        //     output[char] = 1
        // )
    }
    console.log(output);
    // console.log(Object.entries(output).map( (val, i, arr) => val[1]));
    // console.log(JSON.stringify(output));
}

countWords('i am react developer');