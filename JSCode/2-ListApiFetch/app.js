document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const appContainer = document.getElementById('app');

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the fetched data
            data.forEach(user => {
                // Create a card for each user
                const card = createCard(user);
                // Append the card to the app container
                appContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to create a card for a user
    function createCard(user) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = `https://via.placeholder.com/150?text=${user.name}`;
        img.alt = user.name;

        const name = document.createElement('h3');
        name.textContent = user.name;

        const username = document.createElement('p');
        username.textContent = `Username: ${user.username}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${user.email}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(username);
        card.appendChild(email);

        return card;
    }
});
