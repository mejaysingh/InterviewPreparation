function displayDetails() {
    // Get user details
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    // Display details
    var userDetailsDisplay = document.getElementById("userDetailsDisplay");
    userDetailsDisplay.innerHTML = 
        "<h2>User Details:</h2>" +
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Age:</strong> " + age + "</p>";
}
