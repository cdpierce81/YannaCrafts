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

