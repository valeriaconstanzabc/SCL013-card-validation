let digit_position = null; //digito de posicion o cifra
let digit_chain = null; //digito de cadena o cifra
let suma = 0;

const validator = {

  isValid: (numberCard) => {
    let chain = numberCard.toString(); //Chain=cadena
    let long = chain.length; //log=largo

    for (var i=0; i < long; i+=2){
    digit_position = parseInt(chain.charAt(i))*2;

    if (digit_position > 9){ 
       digit_chain = digit_position.toString();
       digit_position = parseInt(digit_chain.charAt(0)) + 
     parseInt(digit_chain.charAt(1));
     }

    suma+=digit_position;
    }

    for (let i=1; i < long; i+=2){
      suma += parseInt(chain.charAt(i));
    }	
      if ((suma % 10) == 0){ 
        return true;
      } else {
          return false;
      }
    return numberCard;
  },

  maskify: (numberCard) => {
    //creo una variable que almacena string al inicio esta vacia//
    let hiddenString = "";
    //creo un for con una expresion-inicial(i=0)pues comienzo en la posicion 0 del string, luego la condicion (i < numberCard.length - 4)que indica que si i es menor al largo de string menos 4 y la expresion-final que indica ir sumando 1 a i en cada iteracion//
    for(let i = 0; i < numberCard.length - 4; i++) {
      //maskedString  va sumando una X en cada iteracion (+= "X")//
      hiddenString += "X";
    }

    //como el for anterior completa "X" si se cumple la condicion , pero no incluye los ultimos 4 digitos del string. creamos un for con inicio numberCard.length - j nos muestra los numeros desde atras , es decir si es numberCard.length - 1 este corresponde al ultimo caracter de nuestro string por lo tanto numberCard.length - 2 corresponde al penultimo y asi sucesivamente. por lo tanto queremos que nuestro primer numero que se muestre en esta cadena sea numberCard.length - 4 y para esto debemos definir un j=4 lugo la condicion j >= 1 para abarcar los numerosque necesitamos se muestren y luego expresion-final que va restando (j--)en cada iteracion.
    for(let j = 4; j >= 1; j--) {
      //defino una variable que representa el numero de tarjeta de los ultimos 4 digitos al aplicar charAt e indicando su indice () voy accediendo a la ubicacion del caracter que deseo guardar(los ultimos 4 con  numberCard.length - j y nuestro for) por lo tanto me muestra el numero de tarjeta que indico mediante el indice//
      let lastCharacter = numberCard.charAt(numberCard.length - j);
      //va sumando uno a uno cada caracter del string que le indico en cada iteracion//
      hiddenString += lastCharacter;
    }
    //finalizo la ejecución de la función y especifico el valor de la función al ser llamada.//
    return hiddenString;
  }
};
export default validator;