window.addEventListener('load', ()=> {  /* Escuchamos cuando se carga el docuento */

/* Creamos dos constantes para guardar los elementos que necesitamos */
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

/* Creamos otra constante para convertir este HTMLcolections en un Array */
    const keypadButtonsArray = Array.from(keypadButtons);

/* Iteramos por nuestro nuevo array de buttons */
    keypadButtonsArray.forEach( (button) => {

/* Acada button le agregamos un Listener */
        button.addEventListener('click', ()=> {
     /* console.log(button.innerHTML);  InnerHTML imprime el numero de cada button */
            calculadora(button, display)
        })
    })
})

function calculadora(button, display) {
    switch(button.innerHTML) {
        case 'C':
            borrar(display);
        
        case '=':
            calcular(display);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

/* Tomar el string, resolverlo, guardarlo en el innerHTML del display */
function calcular(display) {
    display.innerHTML = eval(display.innerHTML)  
}

/* Permite que se actualice el display con cada numero y simbolo al que le demos click */
function actualizar(display, button) {
    if(display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

/* Borra el display y lo iguala a 0 */
function borrar(display) {
    display.innerHTML = 0;
}