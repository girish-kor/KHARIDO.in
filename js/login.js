document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const loginMessage = document.getElementById('login-message')

  if (email === '' || password === '') {
    loginMessage.textContent = 'Please fill out both fields.'
    loginMessage.style.display = 'block'
    return
  }

  if (email === 'user@example.com' && password === 'password123') {
    loginMessage.textContent = 'Login successful! Redirecting...'
    loginMessage.style.color = '#28a745'
    loginMessage.style.display = 'block'
    setTimeout(() => {
      window.location.href = '../index.html'
    }, 2000)
  } else {
    loginMessage.textContent = 'Invalid credentials. Please try again.'
    loginMessage.style.display = 'block'
  }
})
