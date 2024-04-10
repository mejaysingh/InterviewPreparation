// Company - Deloitte - React
// Question - 1
// write a function to return [ENGLISH, SCIENCE] as array
// [{id: 1, 'english'}, {id: 1, 'english'}]
// [{id: 1, 'science'}, {id: 1, 'science'}]
console.log('Q.1. Function to return [ENGLISH, SCIENCE] as array');

// Answer:
let arr = [{
    id: 1,
    subject: 'Science'
  },
  {
    id: 2,
    subject: 'English'
  },
  {
    id: 3,
    subject: 'Science'
  },
  {
    id: 4,
    subject: 'Science'
  },
  {
    id: 5,
    subject: 'English'
  },
]


//IMPLEMENTATION
// iterate & filter based on english & eglish

// function subjectFilter(subject){
//     return arr.filter( (row) => row.subject === subject )
// }

const result = () => {
  // APPROACH - 1
    // const science = subjectFilter('Science')
    // const english = subjectFilter('English')
    
    // APPROACH - 2
    const science = arr.filter( (row) => row.subject === 'Science' );
    const english = arr.filter( (row) => row.subject === 'English' );
    
    return [english, science]
}

console.log(result());

//----------
// Question - 2
// curring function
// mul(2)(4)(5)
console.log('\n Q.2. Currying function for multiplication');

// Answer:
function multiply (a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

const mul = multiply;
console.log(mul(2)(4)(5));

