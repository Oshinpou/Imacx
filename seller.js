const sellerForm = document.getElementById('seller-form');
const productForm = document.getElementById('product-form');
const productDisplay = document.getElementById('product-display');

// Array to hold the created products
let products = [];

// Event listener for seller account creation
sellerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here, you would typically send this data to your backend

    alert(`Account created for ${username}`);
    sellerForm.reset();
});

// Event listener for uploading product card
productForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const category = document.getElementById('product-category').value;
    const name = document.getElementById('product-name').value;
    const mainImage = document.getElementById('product-main-image').value;
    const description = document.getElementById('product-description').value;
    const details = document.getElementById('product-details').value;
    const price = document.getElementById('product-price').value;
    
    // Collect additional image URLs
    const imageUrls = Array.from(document.querySelectorAll('.product-image-url'))
                           .map(input => input.value).filter(url => url);

    const newProduct = {
        category,
        name,
        mainImage,
        imageUrls,
        description,
        details,
        price
    };

    products.push(newProduct);
    displayProducts();
    productForm.reset();
});

// Function to display uploaded products
function displayProducts() {
    productDisplay.innerHTML = ''; // Clear previous display

    products.forEach(product => {
        const productHTML = `
            <div class="product-card">
                <img src="${product.mainImage}" alt="${product.name}" class="product-image">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: INR ${product.price}</p>
                <button onclick="viewProduct('${product.name}')">View Product</button>
            </div>
        `;
        productDisplay.insertAdjacentHTML('beforeend', productHTML);
    });
}

// Function to handle viewing product details
function viewProduct(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
        alert(`Product: ${product.name}\nDescription: ${product.description}\nDetails: ${product.details}\nPrice: INR ${product.price}`);
    }
}
