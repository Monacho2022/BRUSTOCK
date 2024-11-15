document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        window.location.href = '/dashboard'; // Redirige al usuario a su panel de control
      } else {
        const result = await response.json();
        document.getElementById('error-message').innerText = result.message;
        document.getElementById('error-message').style.display = 'block';
      }
    } catch (error) {
      document.getElementById('error-message').innerText = 'Error de red. Intenta de nuevo.';
      document.getElementById('error-message').style.display = 'block';
    }
  });
  