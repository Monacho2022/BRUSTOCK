document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Muestra el modal
    var modal = document.getElementById('modal');
    modal.style.display = 'block';

    // Cierra el modal cuando se hace clic en la "x"
    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
    };

    // Cierra el modal si el usuario hace clic fuera de él
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Cierra el modal automáticamente después de 3 segundos (opcional)
    setTimeout(function() {
        modal.style.display = 'none';
    }, 3000);
});
