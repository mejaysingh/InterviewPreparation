// app.js
document.addEventListener('DOMContentLoaded', async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const appContainer = document.getElementById('app');
    const userSelect = document.getElementById('userSelect');

    try {
        const data = await fetchData(apiUrl);

        populateDropdown(data);
        userSelect.addEventListener('change', () => renderCards(data, userSelect.value));

        // Initial render with all users
        renderCards(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    async function fetchData(url) {
        const response = await fetch(url);
        return response.json();
    }

    function populateDropdown(data) {
        userSelect.innerHTML = data.map(user => `<option value="${user.id}">${user.name}</option>`).join('');
    }

    function renderCards(data, selectedUserId) {
        const filteredData = selectedUserId ? data.filter(user => user.id === Number(selectedUserId)) : data;
        appContainer.innerHTML = filteredData.map(createCard).join('');
    }

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
