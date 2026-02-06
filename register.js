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

function loginUser() {
    // 1. Get what the user typed in the login box
    const emailAttempt = document.getElementById('login-email').value;
    
    // 2. Go to the "Local Database" and grab the saved user
    // We use JSON.parse to turn the "String" back into a "JSON Object"
    const savedUser = JSON.parse(localStorage.getItem('yanna_user'));

    // 3. The If/Else Logic (The Brains)
    if (savedUser && savedUser.email === emailAttempt) {
        alert("Success! Welcome back to Yanna Crafts.");
        // You could redirect them to a 'members' page here
    } else {
        alert("Error: User not found in our database.");
    }
}

