// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 1. Capture the data when they click 'Register'
function registerUser() {
    const userEmail = document.getElementById('email').value;
    const userPass = document.getElementById('password').value;

    // 2. Create a "User object" (JSON style)
    const newUser = {
        email: userEmail,
        password: userPass // In a real app, we would encrypt this!
    };

    // 3. Save it to the "Local Database"
    // 'localStorage' is a built-in "array" in your browser
    localStorage.setItem('yanna_user', JSON.stringify(newUser));

    alert("User saved to local browser database!");
}
