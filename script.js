// Function to show messages on the admin page
function displayMessages() {
    const displayArea = document.getElementById('message-display');
    const savedData = localStorage.getItem('userMessage');

    if (savedData) {
        const msg = JSON.parse(savedData);
        displayArea.innerHTML = `
            <div style="border: 1px solid #ccc; padding: 15px; border-radius: 8px;">
                <p><strong>From:</strong> ${msg.sender} (${msg.contact})</p>
                <p><strong>Date:</strong> ${msg.date}</p>
                <p><strong>Message:</strong> ${msg.text}</p>
            </div>
        `;
    }
}

// Function to clear the "database"
function clearMessages() {
    localStorage.removeItem('userMessage');
    location.reload(); // Refresh the page to show it's empty
}

function saveMessage() {
    // This stops the page from refreshing so we can save the data first!
    if (event) event.preventDefault();
    // 1. Grab the values from the form
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const msg = document.getElementById('contact-message').value;

    // 2. Create a JSON object for the message
    const newMessage = {
        sender: name,
        contact: email,
        text: msg,
        date: new Date().toLocaleDateString()
    };

    // 3. Save it to Local Storage (the browser's mini-database)
    // We 'stringify' it because Local Storage only speaks in strings!
    localStorage.setItem('userMessage', JSON.stringify(newMessage));

    alert("Thanks, " + name + "! Your message has been saved to the browser's local storage.");
}

// Fetch the JSON file
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.getElementById('product-grid');
    
    // For each item in the JSON, create a 'card'
    data.forEach(product => {
      productContainer.innerHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      `;
    });
  });

