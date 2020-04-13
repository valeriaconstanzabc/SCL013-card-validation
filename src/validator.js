let digit_position = null; //digito de posicion o cifra vacio o sin valor
let digit_chain = null; //digito de cadena o cifra vacio o sin valor
let suma = 0;//constante de suma

const validator = {//constante que contiene una funcion 

  isValid: (numberCard) => {//funcion isValid que comprueba si el numero ingresado es valido o no
    let chain = numberCard.toString(); //chain devuelve una cadena que representa al objeto que ingreso el usuario.
    let long = chain.length; //long cuenta el largo de la cadena chain

 

    for (let i=0; i < long; i+=2){//creo un for que comenzara a iterar en la posicion 0 es decir el primer digito de mi cadena, llegara hasta que sea menor al largo de la cadena y ira avanzando de 2 en 2
    digit_position = parseInt(chain.charAt(i))*2;//se crea una variable tipo numero que al acceder a cada posicion(i) y multiplicar el valor del digito en esa posicion por 2 

    if (digit_position > 9){ //si el valor que se obtiene es mayora 9 y porlo tanto tiene 2 componentes
       digit_chain = digit_position.toString();//devuelve una cadena (para poer acceder a los componenetes de la cadena)que represeta al objeto que se transformo a numero y se multiplico por 2
       digit_position = parseInt(digit_chain.charAt(0)) + 
       parseInt(digit_chain.charAt(1));//transforma a numero cada integrante de la cadena accediendo a ellos segun su posicion con charAt para luego sumarlos
      }

    suma+=digit_position;//suma lo valores uno por uno hasta llegar a i < long a una variabla suma definida al comienzo con valor 0 (suma los valores en posiciones definidas por el for)
    }

    for (let i=1; i < long; i+=2){// parte en la posicion 1 de la cadena hasta llegar a i < long avanzando de 2 en 2
      suma += parseInt(chain.charAt(i));//suma a la variable suma definida al comienzo con valor 0 los valores de la cadena que los tranforma a numero (parseInt) segun su posicion (charat(i))
    } 
      if ((suma % 10) == 0){ // si suma que ya no es 0 pues se agrego digit_position +  parseInt(chain.charAt(i)) tiene residuo 0 al ser dividida por 10
        return true;//entonces de retorna la funcion como verdadera
      } else {
          return false;//de lo contrario se retornara false
      }
    return numberCard; //se retorna el valor de la tarjeta
  },
//4137894711755904
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
