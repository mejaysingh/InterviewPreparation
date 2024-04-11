// app.js
document.addEventListener('DOMContentLoaded', async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const appContainer = document.getElementById('app');
    const userSelect = document.getElementById('userSelect');

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Populate the dropdown with user names
        data.forEach(user => {
            const option = document.createElement('option');
            option.value = user.id;
            option.textContent = user.name;
            userSelect.appendChild(option);
        });

        // Add an event listener to the dropdown for filtering
        userSelect.addEventListener('change', () => {
            const selectedUserId = userSelect.value;
            const filteredData = selectedUserId ? data.filter(user => user.id === Number(selectedUserId)) : data;

            // Process the filtered data
            appContainer.innerHTML = filteredData.map(createCard).join('');
        });

        // Initial render with all users
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
