// --- CONFIGURACIÓN DE LA TRANSMISIÓN DE DATOS ---
const targetSentence = "Mi osito Teddy tiene 4 patas, su cuerpo es muy blando y su pelo suave.";

/**
 * 🌟 EVENTO INICIAL DE ENFOQUE AUTOMÁTICO:
 * Coloca la línea vertical parpadeante de inmediato en el campo "Nombre" al abrir el juego.
 */
window.onload = function() {
    document.getElementById('input-name').focus();
};

/**
 * Pasa del registro a la pantalla de control central
 */
function startGame() {
    const name = document.getElementById('input-name').value.trim();
    const lastname = document.getElementById('input-lastname').value.trim();
    
    // Validación obligatoria de Nombre y Apellido
    if (name === "" || lastname === "") {
        alert("🚨 SISTEMA: Error de autenticación. Debes ingresar tu NOMBRE y APELLIDO.");
        return;
    }
    
    // Almacenamos y renderizamos el nombre completo del piloto
    document.getElementById('player-fullname').innerText = `${name} ${lastname}`;
    
    // Transición de pantallas usando tu clase estructural (.oculto)
    document.getElementById('screen-welcome').classList.add('oculto');
    document.getElementById('screen-game').classList.remove('oculto');
    
    // 🌟 ENFOQUE AUTOMÁTICO: Coloca el cursor (línea vertical) solo en el área de juego
    document.getElementById('input-game').focus();
}

/**
 * Procesa la oración digitada por el niño en el teclado físico
 */
function checkResult() {
    const userInputField = document.getElementById('input-game');
    const userText = userInputField.value.trim();
    const cleanTarget = targetSentence.trim();

    // Limpiamos estilos previos de intentos anteriores
    userInputField.classList.remove('correcta', 'incorrecta');

    if (userText === cleanTarget) {
        // Enciende el cuadro en verde neón usando tu clase .correcta
        userInputField.classList.add('correcta');
        
        // Pequeña pausa dramática de procesamiento de datos antes de celebrar
        setTimeout(() => {
            document.getElementById('screen-game').classList.add('oculto');
            document.getElementById('screen-win').classList.remove('oculto');
        }, 600);
    } else {
        // Enciende el cuadro en rojo neón usando tu clase .incorrecta
        userInputField.classList.add('incorrecta');
        alert("🚨 ERROR DE SINCRONIZACIÓN: La oración no es idéntica. Revisa las mayúsculas, comas o puntos e intenta de nuevo.");
    }
}

/**
 * Reinicia por completo los inputs y pantallas del juego
 */
function resetGame() {
    // Vaciar variables e inputs físicos
    document.getElementById('input-name').value = "";
    document.getElementById('input-lastname').value = "";
    
    const gameInput = document.getElementById('input-game');
    gameInput.value = "";
    gameInput.classList.remove('correcta', 'incorrecta');

    // Regresar a la pantalla inicial
    document.getElementById('screen-win').classList.add('oculto');
    document.getElementById('screen-welcome').classList.remove('oculto');

    // 🌟 Re-enfocar automáticamente la línea al reiniciar
    document.getElementById('input-name').focus();
}
