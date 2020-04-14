import validator from './validator.js';

document.getElementById("paginaPrincipal").style.display="block"//nos muestra la pantalla de bienvenida al usuario//
let botonReserva = document.getElementById("botonReserva");// variable para boton que noos lleva a la segunda pagina//

botonReserva.addEventListener('click', ()=>{//registra el evento clic del boton reservar//
  document.getElementById("paginaPrincipal").style.display = "none";//al hacer clic escondemos la pagina principal//
  document.getElementById("formularioInicial").style.display="block";//partimos mostrando el formulario que está englobado en un div con id formularioInicial//
});

let botonNuevaReserva = document.getElementById("nuevaReserva");//variable para el boton  volver al formulario y realizar nueva reserva//
botonNuevaReserva.addEventListener('click', ()=>{//registra el evento clic del boton nurva reserva//
  document.getElementById("reservaRealizada").style.display = "none";//esconde la pagina final donde estara la reserva final//
  document.getElementById("formularioInicial").style.display="block";//partimos mostrando el formulario que está englobado en un div con id formularioInicial//
});
let botonValidar = document.getElementById("validar");//Variable que trae el botón validar desde HTML//


botonValidar.addEventListener('click', (validar)=>{//Botón validar (click en el objeto botón)//
  document.getElementById("validacion1").style.display = "block";  //Nos trae la información desde el html que está escondida en un principio//
  (validar).preventDefault();  //devuelve una cadena que representa el objeto >>quita que lo que ingresamos se comporte como un formulario//
  let numberCard = document.getElementById('tarjeta').value;//Variable que extrae el número de la tarjeta ingresada//

  if(validator.isValid(numberCard)==true){//llamamos al objeto validador en espacial a la funcion isValid si esta da true//
  document.getElementById("validacion1").innerHTML = "tarjeta correcta";//mostrara en el html "tarjeta correcta"//
  document.getElementById("botonConfirmarReserva").style.display = "block";//si se cumple mostrara el boton confirmar reserva//
  }else if (numberCard==" "||numberCard==null){//si no da true y el usuario ingreso un espacio o nulo//
    document.getElementById("validacion1").innerHTML = "Ingresa el número de tu tarjeta";//se mostrara en el html  "Ingresa el número de tu tarjeta"//
  } else{//si no se cumle ninguna de las dos anteriores//
  document.getElementById("validacion1").innerHTML = "tarjeta incorrecta";//se mostrara en pantalla "tarjeta incorrecta"// 
  }
});

let botonConfirmarReserva = document.getElementById("botonConfirmarReserva");//variable que asigna el boton confirmar reserva//

botonConfirmarReserva.addEventListener('click', ()=>{//boton confirmar reserva (clic en el objeto boton)//
  document.getElementById("formularioInicial").style.display="none"; //desaparece el bloque formulario//
  let porElementos=document.forms["datosReserva"].elements[0].value; //variables que guardan un valor ingresado al formulario//
  let porElementos1=document.forms["datosReserva"].elements[1].value;
  let porElementos2=document.forms["datosReserva"].elements[2].value;
  let porElementos3=document.forms["datosReserva"].elements[3].value;
  let porElementos4=document.forms["datosReserva"].elements[4].value;
  let porElementos5=document.forms["datosReserva"].elements[5].value;
  
  let numberCard = document.getElementById('tarjeta').value;//variable que guarda el valor de la tarjeta ingresado en el input//
  validator.maskify(numberCard);//se llama a la funcion que oculpar el numero de la tarjeta
  document.getElementById("reservaRealizada").style.display="block";//aparece la ultima pagina
  document.getElementById("felicitaciones").innerHTML = "Felicitaciones " +porElementos4+ "!";// imprime en el html los datos y string mencionados//
  document.getElementById("tarjetaOculta").innerHTML = "Su reserva para el día " 
  + porElementos + " de " + porElementos1 + " hasta el día " + porElementos2 + " de " + porElementos3
  + " se a realizado con éxito con la tarjeta " + validator.maskify(numberCard);
  document.getElementById("datosEnviados").innerHTML ="Los datos de esta reserva han sido enviados al email " + porElementos5;
});
