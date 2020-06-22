import validator from './validator.js';

var numberInput = document.querySelector('#tc-number');
var cardHolderInput = document.querySelector('#holder-name');
var cvvInput = document.querySelector('#cvv');
var expirationDateInput = document.querySelector('#Date');

/**
 * Agregamos el vento keyup para que cada vez que el usuario teclea en el campo
 * Se vaya obteniendo el valor en tiempo real
 * @see https://developer.mozilla.org/es/docs/Web/API/Document/keyup_event
 */
numberInput.addEventListener('keyup', onNumberInputChange);

function onNumberInputChange(event) {
    var numberInputValue = event.currentTarget.value;
    var creditCardNumberViewer = document.querySelector('.credit-card-viewer .number');
    creditCardNumberViewer.textContent = validator.maskify(numberInputValue);
}

cardHolderInput.addEventListener('keyup', onCardHolderInputChange);

function onCardHolderInputChange(event) {
    var holderName = event.currentTarget.value;
    var holderNameViewer = document.querySelector('#tc-holder-name-viewer .value');
    holderNameViewer.textContent = holderName;
}

cvvInput.addEventListener('keyup', onCVVInputChange);

function onCVVInputChange(event) {
    var cvvValue = event.currentTarget.value;
    var cvvViewer = document.querySelector('#tc-holder-cvv-viewer .value');
    cvvViewer.textContent = cvvValue;
}

expirationDateInput.addEventListener('change', onDateInputChange);

function onDateInputChange(event) {
    var dateValue = event.currentTarget.value;
    var dateViewer = document.querySelector('#tc-holder-expiration-viewer .value');
    dateViewer.textContent = dateValue;
}