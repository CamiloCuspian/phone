const campoTelefono = document.getElementById('campoTelefono');
const botonesTeclado = document.querySelectorAll('.teclado input[type="button"]');

botonesTeclado.forEach(boton => {
    boton.addEventListener('click', function() {
        const valorBoton = boton.value;
        campoTelefono.value += valorBoton;
        });
    });