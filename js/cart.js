const cartItemsContainer = document.getElementById('cart-items')
const cartTotalContainer = document.getElementById('cart-total')

function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || []
  cartItemsContainer.innerHTML = ''

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>'
    cartTotalContainer.innerHTML = ''
    return
  }

  let total = 0
  cart.forEach((item, index) => {
    const cartItem = document.createElement('div')
    cartItem.classList.add('cart-item')

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `
    cartItemsContainer.appendChild(cartItem)
    total += parseFloat(item.price)
  })

  cartTotalContainer.innerHTML = `<h2>Total: $${total.toFixed(2)}</h2>`
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || []
  cart.splice(index, 1)
  localStorage.setItem('cart', JSON.stringify(cart))
  loadCart()
  updateCartCount()
}

loadCart()
