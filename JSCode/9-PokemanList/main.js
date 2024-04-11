import { loadAPIData, loadMultipleAPIData } from "./api.js"
import { renderRow } from "./renderRow.js"

const API_URL = "https://pokeapi.co/api/v2/pokemon/"

/* 
Create a vanilla js application that consumes the 
https://pokeapi.co/api/v2/pokemon/ and displays a table contaning a list of 
pokemon name and abilities. The application can multiple parallel api calls 
to fetch pokemon details including their abilities and display them int able

https://pokeapi.co/api/v2/pokemon/

https://pokeapi.co/api/v2/pokemon/1/
*/

document.addEventListener('DOMContentLoaded', async function(e){
    try {
        const pokemons = await loadAPIData(API_URL); 
        
        console.log('Pokemon:',pokemons.results)
        const pokemonsWithAbilities = await loadMultipleAPIData(pokemons?.results)
        console.log('Abilities:',pokemonsWithAbilities);
        pokemonsWithAbilities.forEach(renderRow)
    } catch (error) {
        console.error(`Error in main event listener: ${error.message}`)
    }
})

// async function loadAPIData(API_URL){
//     try {
//         console.log(API_URL)
//         const result = await fetch(API_URL);
//         const response = await result.json();
//         return response
//     } catch (error) {
//         console.error(`Error in API data fetch ${error.message}`)
//     }
// }

// async function loadMultipleAPIData(data){
//     try {
//         const apis =  data.map( (row) => loadAPIData(`${row.url}`))
//         const response = await Promise.all(apis)
//         return response
//     } catch (error) {
//         console.error(`Error in mutltiple API data fetch ${error.message}`)
//     }
// }