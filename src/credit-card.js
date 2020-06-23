import validator from './validator.js';

// Seleccionamos el input de la tarjeta de credito
var numberInput = document.querySelector('#tc-number');

// Seleccionamos el input del holder name
var cardHolderInput = document.querySelector('#holder-name');

// Seleccionamos el input del campo CVV
var cvvInput = document.querySelector('#cvv');

// Seleccionamos el input de la fecha de expiracion
var expirationDateInput = document.querySelector('#Date');

/**
 * Agregamos el evento keyup para que cada vez que el usuario teclea en el campo
 * Se vaya obteniendo el valor en tiempo real
 * @see https://developer.mozilla.org/es/docs/Web/API/Document/keyup_event
 */
numberInput.addEventListener('keyup', onNumberInputChange);

/**
 * Esta función se ejecuta cada vez que el usuario teclea algo en el input de la tarjeta de credito
 * @param {KeyboardEvent} event 
 * @see https://developer.mozilla.org/es/docs/Web/API/Document/keyup_event
 */
function onNumberInputChange(event) {
    /**
   * Al seleccionar con event.currentTarget accedemos al elemento HTML que está asociado al evento
   * En este caso es el input de la tarjeta de credito
   * @see https://developer.mozilla.org/es/docs/Web/API/Event/currentTarget
   */
    var numberInputValue = event.currentTarget.value;

    // Aqui seleccionamos el elemento SPAN vacio que contendrá el numero de la tarjeta de credito
    var creditCardNumberViewer = document.querySelector('.credit-card-viewer .number');

    // Aqui asignamos el valor del input de la tarjeta de credito, usamos maskify
    // El valor con el maskify es puesto dentro del SPAN de la tarjeta de credito que antes estaba vacio
    // Y ahora tendrá el valor que vayamos ingresando en el input del numero del formulario
    creditCardNumberViewer.textContent = validator.maskify(numberInputValue);
}

/**
 * Agregamos el evento keyup para que cada vez que el usuario teclea en el campo de CARD HOLDER
 * Se vaya obteniendo el valor en tiempo real del valor card holder
 * @see https://developer.mozilla.org/es/docs/Web/API/Document/keyup_event
 */
cardHolderInput.addEventListener('keyup', onCardHolderInputChange);

/**
 * Esta función se ejecuta cada vez que el usuario teclea algo en el input de del CARD HOLDER
 * @param {KeyboardEvent} event 
 * @see https://developer.mozilla.org/es/docs/Web/API/Document/keyup_event
 */
function onCardHolderInputChange(event) {
    // Como este evento está asociado al input del card holder
    // Al hacer currentTarget seleccionamos el input del card holder y su valor
    var holderName = event.currentTarget.value;
    // Seleccionamos el SPAN vacio que contendrá el valor del Card Holder
    var holderNameViewer = document.querySelector('#tc-holder-name-viewer .value');
    // Y ahora tendrá el valor que vayamos ingresando en el input del card holder del formulario
    holderNameViewer.textContent = holderName;
}

/**
 * Agregamos el vento keyup para que cada vez que el usuario teclea en el campo de CVV
 * Se vaya obteniendo el valor en tiempo real del valor CVV
 * @see https://developer.mozilla.org/es/docs/Web/API/Document/keyup_event
 */
cvvInput.addEventListener('keyup', onCVVInputChange);

/**
 * Esta función se ejecuta cada vez que el usuario teclea algo en el input de del CVV
 * @param {KeyboardEvent} event 
 * @see https://developer.mozilla.org/es/docs/Web/API/Document/keyup_event
 */
function onCVVInputChange(event) {
    // Como este evento está asociado al input del CVV
    // Al hacer currentTarget seleccionamos el input del CVV y su valor
    var cvvValue = event.currentTarget.value;
    // Seleccionamos el SPAN vacio que contendrá el valor del CVV
    var cvvViewer = document.querySelector('#tc-holder-cvv-viewer .value');
    // Y ahora tendrá el valor que vayamos ingresando en el input del CVV del formulario
    cvvViewer.textContent = cvvValue;
}

/**
 * Agregamos el evento CHANGE para que cada vez que el usuario cambia el EXPIRATION
 * Se vaya obteniendo el valor en tiempo real del valor del EXPIRATION DATE
 * @see https://developer.mozilla.org/es/docs/Web/API/HTMLElement/change_event
 * Aquí usamos un CHANGE event en vez de un KEYUP porque este campo no es de teclear 
 * sino de seleccionar fechas de un calendario
 */
expirationDateInput.addEventListener('change', onDateInputChange);

/**
 * Esta función se ejecuta cada vez que el usuario cambia la fecha en el campo de DATE
 * @param {Event} event 
 * @see https://developer.mozilla.org/es/docs/Web/API/HTMLElement/change_event
 */
function onDateInputChange(event) {
    // Como este evento está asociado al input del EXPIRATION DATE
    // Al hacer currentTarget seleccionamos el input del EXPIRATION DATE y su valor
    var dateValue = event.currentTarget.value;
    // Seleccionamos el SPAN vacio que contendrá el valor del EXPIRATION DATE
    var dateViewer = document.querySelector('#tc-holder-expiration-viewer .value');
    // Y ahora tendrá el valor que vayamos ingresando en el input del EXPIRATION DATE del formulario
    dateViewer.textContent = dateValue;
}