function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  }
  function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
  }
  
  function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  }
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    if (validateEmail(email) && validatePassword(password)) {
      alert('Logged in successfully!');
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
    } else {
      alert('Invalid email or password');
    }
  });
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    if (name && validateEmail(email) && validatePassword(password) && password === confirmPassword) {
      alert('Registration successful!');
      showLoginForm();
    } else {
      alert('Please fill all fields correctly.');
    }
  });
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
  function validatePassword(password) {
    return password.length >= 6;
  }