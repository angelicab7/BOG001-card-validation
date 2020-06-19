import validator from './validator.js';

// Seleccionar formulario y guardarlo en una variable
var paymentForm = document.querySelector('#payment-form');
/**
 * Agregar evento al formulario
 * Cuando se hace click en el boton Pay
 * El evento submit es lanzado y ejecuta
 * nuestra funcion
 */
paymentForm.addEventListener('submit', onSubmit);

/**
 * Nuestra función es llamada cuando se llama
 * el anterior evento.
 */
function onSubmit(event) {
  /**
   * Se busca el elemento input de la pagina
   */
  var numberInput = document.querySelector('#tc-number');

  /* la propiedad validity.valid es true cuando se llena el campo de la tarjeta sin importar cual sea el valor */
  /**
 * @see https://developer.mozilla.org/es/docs/Learn/HTML/Forms/Validacion_formulario_datos
 */
  if (numberInput.validity.valid) {
    // Se detiene el comportamiento por defecto con preventDefault
    event.preventDefault();

    // Obtenemos el valor del credit card input con el atributo value
    var numberInputValue = numberInput.value;

    // Hacemos maskify del valor
    validator.maskify(numberInputValue);

    // Si la tarjeta de credito es valida usando nuestro algoritmo de Luhn
    if (validator.isValid(numberInputValue)) {
      // Seleccionamos el dialog successfull
      var successfulDialog = document.querySelector('.dialog.successful');
      // Mostramos el dialog successful agregando la clase active
      successfulDialog.classList.add("active");
    } else {
      // Si es una tarjeta de credito invalida
      // Seleccionamos el dialog wrong
      var errorDialog = document.querySelector('.dialog.wrong');
      // Mostramos el dialog wrong
      errorDialog.classList.add("active");
    }
  }
}

// Seleccionamos todos los botones de close de los dos dialogs, el successful y el wrong
var dialogCloseButtons = document.querySelectorAll('.dialog .close');

// Como son dos botones, retorna una lista de elementos HTML que tienen los dos botones
// Hacemos un forEach para iterar en cada boton
dialogCloseButtons.forEach(function (closeButton) {
  // A cada boton le agregamos el evento Click
  // Cada vez que haya un click en alguno de los botones se ejecuta nuestra funcion closeDialog()
  closeButton.addEventListener('click', closeDialog);
});

// Esta funcion se ejecuta cada vez que se hace click al boton close del dialogo successful o wrong
function closeDialog(event) {
  /**
   * Al seleccionar con event.currentTarget accedemos al elemento HTML al que se le hizo click
   * En este caso al botón close
   * Al hacer event.currentTarget.parentElement accedemos al elemento padre del boton close
   * En este caso es el dialog successful o wrong dependiendo de a cual le dimos click
   * @see https://developer.mozilla.org/es/docs/Web/API/Event/currentTarget
   */
  var dialog = event.currentTarget.parentElement;

  // Al tener seleccionado el dialogo le quitamos la clase active
  // Esto va a hacer que el dialog se oculte
  dialog.classList.remove("active");
}