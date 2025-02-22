// Elementos del DOM
const passwordField = document.getElementById('password');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');

// Función para actualizar el valor mostrado del slider
lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
});

// Función para generar la contraseña
function generatePassword() {
  const length = parseInt(lengthSlider.value);
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  return password;
}

// Evento para generar la contraseña al hacer clic
generateBtn.addEventListener('click', () => {
  const newPassword = generatePassword();
  passwordField.value = newPassword;
});

// Función para copiar la contraseña al portapapeles
copyBtn.addEventListener('click', () => {
  if (passwordField.value) {
    // Selecciona el contenido del input
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // Para dispositivos móviles
    // Copia el texto seleccionado
    navigator.clipboard.writeText(passwordField.value)
      .then(() => {
        alert("¡Contraseña copiada al portapapeles!");
      })
      .catch(err => {
        alert("Error al copiar la contraseña.");
      });
  }
});
