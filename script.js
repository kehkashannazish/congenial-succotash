let products = [
  {
    name: "iPhone 14",
    price: 70000,
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Shoes",
    price: 2000,
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Headphones",
    price: 1500,
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Laptop",
    price: 50000,
    image: "https://via.placeholder.com/200"
  }
];

let cartCount = 0;

// DISPLAY PRODUCTS
function displayProducts(list) {
  let container = document.getElementById("productContainer");
  container.innerHTML = "";

  list.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      </div>
    `;
  });
}

// ADD TO CART
function addToCart() {
  cartCount++;
  document.getElementById("cartCount").innerText = cartCount;
}

// SEARCH
function searchProduct() {
  let value = document.getElementById("searchBox").value.toLowerCase();

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  displayProducts(filtered);
}

// INITIAL LOAD
displayProducts(products);
