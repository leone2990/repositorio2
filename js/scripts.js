// Mostrar una alerta
function showAlert(){
    alert ('Hola, esta es una alerta JavaScript!');
}
// Validacion de Formularios
const form = document.getElementById('myForm');
// Funcion de validacion que verifique el formulario segun los criterios 
function validateEmail(email) { //El mail debe cumplir con ciertas condiciones 
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
    }
    function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
    } else {
    alert('Correo electrónico enviado correctamente.');
    }
    }

//Barra de navegacion responsive. 
//Agrega un detector de eventos al botón “Menú” que alterna la clase “nav-links-responsive“ del elemento con la clase “.nav-links” cuando se hace clic.
//Si el form es Nulo, no realiza el evento
if(form) {
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Realiza la validacion antes de enviar los datos
    validateForm();
    });
}    
    document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
        document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
    }
    )