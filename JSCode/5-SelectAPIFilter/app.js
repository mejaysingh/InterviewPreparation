// const containerEl = document.getElementById('container');
const containerEl = document.querySelector('.container');
const prodSelectEl = document.querySelector('#productSelect')
const filterEl = document.querySelector('.filter')
const API_URL = "https://fakestoreapi.com/products";
let products = [];

// console.log(filterEl);

// document.addEventListener('DOMContentLoaded', async function(){
document.addEventListener('DOMContentLoaded', async function(){
    try {
        products = await loadProducts(API_URL)
        console.log(products);

        // products.forEach(renderSelectOption)

        // Lazy load the products into the dropdown only when needed
        prodSelectEl.addEventListener('focus', renderSelectOption);
        renderCard(products)

        prodSelectEl.addEventListener('change', handleProductSelectChange)
        filterEl.addEventListener('click', handleFilterClick)

        // Add event listener for page unload
        window.addEventListener('beforeunload', cleanup);

        // return products;
        
    } catch (error) {
        console.error(`Error fetching products: ${error.message}`)
        // return null;
    }
});

    function handleProductSelectChange (e){
        const selectedId = parseInt(prodSelectEl.value)
        clearRenderedData()
        renderCard(products, selectedId)
    }

    function handleFilterClick (e){
        // let filteredData
        // if(e.target.className === 'less'){
        //     filteredData = products.filter(data => data.price < 50 )
        // }
        // else if(e.target.className === 'more'){
        //     filteredData = products.filter(data => data.price > 50 )
        // }

        const filteredData = ( e.target.className === 'less'
        ? products.filter(data => data.price < 50)
        : ( e.target.className === 'more'
        ? products.filter(data => data.price > 50)
        : null ) );

        clearRenderedData()
        renderCard(filteredData || products)
    }


    async function loadProducts(API_URL){ 
        const response = await fetch(API_URL)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} for URL: ${API_URL}`);
        }
        return response.json()
    }

    function renderCard(products, selectedId){
        products
        .filter(prod => !selectedId || prod.id === selectedId)
        .forEach(createCardElement);
    }

    function createCardElement(data){
        const cardEl = document.createElement('div');
        const imgEl = document.createElement('img');
        const h2El = document.createElement('h2');
        // console.log(optionEl);
        // const textNode = document.createTextNode(data.category);
        
        cardEl.classList.add('card')
        imgEl.classList.add('image')
        imgEl.src = data.image
       
        h2El.textContent = data.category
        // h2El.appendChild(textNode)

        cardEl.appendChild(imgEl)
        cardEl.appendChild(h2El)
        
        containerEl.appendChild(cardEl)

        // console.log(containerEl);
    }

    function renderSelectOption(){
        if (prodSelectEl.childElementCount === 1) {
            // console.log('option');
            products.forEach(data => {
                const optionEl = document.createElement('option')
                optionEl.value = data.id
                optionEl.textContent = data.category
                prodSelectEl.appendChild(optionEl)
            });
        }
    }

    function clearRenderedData(){
        containerEl.innerHTML = ''
    }

    // Cleanup and remove event listeners when the page is about to be unloaded
    function cleanup() {
        console.log('cleaning up event listeners');
        prodSelectEl.addEventListener('focus', renderSelectOption);
        prodSelectEl.removeEventListener('change', handleProductSelectChange);
        filterEl.removeEventListener('click', handleFilterClick);
        window.removeEventListener('beforeunload', cleanup);
    }

    function createCardElementByHTML(data){
        return `
                <div class="card">
                    <img class="image" src="${data.image}">
                    <h2>${data.category}</h2>
                </div>
        `;
    }
    
    //dummy html
    /*
    <div class="card">
        <img src="" alt="">
        <h2>image name</h2>
    </div>
     */