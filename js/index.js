const products = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  description: `Description of Product ${index + 1}`,
  price: (Math.random() * 100).toFixed(2),
  image: `https://via.placeholder.com/150?text=Product+${index + 1}`,
}))

const productList = document.getElementById('product-list')

function loadProducts() {
  products.forEach(product => {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `

    productList.appendChild(productCard)
  })
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || []
  const product = products.find(p => p.id === productId)
  cart.push(product)
  localStorage.setItem('cart', JSON.stringify(cart))
  updateCartCount()
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  document.getElementById('cart-icon').textContent = `Cart (${cart.length})`
}

loadProducts()
updateCartCount()
