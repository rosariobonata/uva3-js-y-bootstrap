document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("miFormulario").addEventListener("submit", function(event) {
        event.preventDefault(); // EVITA QUE EL FORM SE ENVÍE

        // MUESTRA EL MENSAJE 
        document.getElementById("mensajeEnviado").style.display = "block";
        
        // VACÍA EL FORM
        document.getElementById("miFormulario").reset();
        
        // OCULTA EL MENSAJE DESP DE UN PAR DE SEGUNDOS
        setTimeout(function() {
            document.getElementById("mensajeEnviado").style.display = "none";
        }, 3000); // El MENSAJE DESAPARECE DESP DE 3 SEG
    });
});
