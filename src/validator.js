const validator = {
  isValid: 
  function isValid(code) {
    // Aqui  toma la cantidad de caracteres que tenga el input
      var len = code.length
      //se comrpueba si la cantidad de numeros ingresados es par o impar
      var parity = len % 2
      // se guarda la suma de todos los digitos  hasta llegar al final 
      var sum = 0
      // toma el valor de la posicion indicada
      for (var i = len-1; i >= 0; i--) {
        //se busca el elemento en la posicion 
          var d = parseInt(code.charAt(i))
          /**
           * Si es una tarjeta de 11 numeros el parity es = 1
           * Si es una tarjeta de 12 numeros el parity es = 0
           * Si la posicion es par y el parity es 0 entonces se
           * multiplica por 2
           * Si la pocision es impar y el parity es 1
           * entonces tambien se multplica por 2
           * 
           * Esto quiere decir que en una tarjeta impar las 
           * posiciones impares se multiplican por 2
           * 
           * En una tarjeta par las posiciones pares
           * se multlplican por 2
           */
          if (i % 2 == parity) { d *= 2 }
  
          // Si el digito es mayor a 9 se le resta 9
          if (d > 9) { d -= 9 }
          // suma de la iteracion anterior mas el nuevo resultado
          sum += d
      } 
      //si el resultado da 0, entonces la tarjeta es valida+
      return sum % 10 === 0
  },

  maskify:
  function maskify(creditCardNumber){
    let len= creditCardNumber.length
    let lastDig=creditCardNumber.slice(-4)
    let masked = lastDig.padStart(len,"#");
    return masked;
   }
};

export default validator;


