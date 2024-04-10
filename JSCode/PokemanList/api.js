export async function loadAPIData(API_URL){
    try {
        const result = await fetch(API_URL);
        const response = await result.json();
        return response
    } catch (error) {
        console.error(`Error in API data fetch ${error.message}`)
    }
}

export async function loadMultipleAPIData(data){
    try {
        const apis =  data.map( (row) => loadAPIData(`${row.url}`))
        const response = await Promise.all(apis)
        return response
    } catch (error) {
        console.error(`Error in mutltiple API data fetch ${error.message}`)
    }
}