// Company - Moder Solution
// Question 1. Write function implementation to Get states of a particular country as an array of strings
// Answer:
const countryData = [

	{

		state: "AP",

		country: "India"

	},

	{

		state: "Tamilnadu",

		country: "India"

	},

	{

		state: "Columbia",

		country: "America",

	},
	{
		state: "Kerala",
		country: "India"
	},
	{
		state: "Abc",
		country: "Afghanisthan"
	},
	{

		state: "Xyz",

		country: "Nepal"
	},
	{
		state: "Nagaland",
		country: "India"
	},
	{
		state: "Arunachal Pradesh",
		country: "India"
	}
];
// Get states of a particular country as an array of strings
// output = ["Delhi", "Goa"]

// IMPLEMENTATION:
// APPROACH - 1
// Interate throught given array of objects
// Filter data based on country name
// Reduce the country data with only state array

// APPROACH - 2   [write with one loop only]
// iterate through & check if country is india
// if condation matches then push in to array

function getStates(country) {
    // APPROACH - 1
    const states = countryData.filter((row) =>{
        return row.country === country
    }).reduce( (acc, row) =>{
        acc.push(row.state)
        return acc
    },[])

    // APPROACH - 2  [write with one loop only]
    // const states = []
    // countryData.forEach( (row) => {
    //     if(row.country === country)
    //         states.push(row.state)
    // })

    return states;
}
 
// getStates("India");
console.log(getStates("India"))

// Theoritcal Question Explanation 
// map vs filter difference
const arr= [2,3,4,5]

// transformation with map
const double= [4,6,8,10]

// filteration based on given condition
const even=[2,4]

//authentication

