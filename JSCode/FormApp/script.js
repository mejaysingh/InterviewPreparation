function submitForm() {
    // Get the form element
    var userForm = document.getElementById("userForm");

    // Create a FormData object
    var formData = new FormData(userForm);

    // Convert FormData to JSON
    var user = {};
    // console.log(formData);
    formData.forEach((value, key) => {
        console.log(value,key);
        user[key] = value;
    });
    console.log(user);
    // Display user details
    displayUserDetails(user);

    // Uncomment the lines below if you want to send data to a server
    /*
    fetch('your_server_endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => console.log('Data sent to server:', data))
    .catch(error => console.error('Error sending data to server:', error));
    */

    // Clear the form after submission
    userForm.reset();
}

function displayUserDetails(user) {
    var userDetailsContainer = document.getElementById("userDetails");
    var userDetailsParagraph = document.createElement("p");

    userDetailsParagraph.innerHTML = 
        "<h2>User Details:</h2>" +
        "First Name: " + user.firstName + "<br>" +
        "Last Name: " + user.lastName + "<br>" +
        "Email: " + user.email;

    userDetailsContainer.appendChild(userDetailsParagraph);
}
