// app.js
document.addEventListener('DOMContentLoaded', async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const appContainer = document.getElementById('app');

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Process the fetched data
        appContainer.innerHTML = data.map(createCard).join('');
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    // Function to create a card for a user
    function createCard(user) {
        return `
            <div class="card">
                <img src="https://via.placeholder.com/150?text=${user.name}" alt="${user.name}">
                <h3>${user.name}</h3>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
            </div>
        `;
    }
});
