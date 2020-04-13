//Llamamos aL objeto para que arroje el resultado
import validator from './validator.js';

document.getElementById("contenedor1").style.display="block";

let botonReserva = document.getElementById("botonReserva");

botonReserva.addEventListener('click', ()=>{
  document.getElementById("contenedor1").style.display = "none";
  //partimos mostrando el formulario que está englobado en un div con id formularioInicial
  document.getElementById("formularioInicial").style.display="block";
});

let botonNuevaReserva = document.getElementById("nuevaReserva");

botonNuevaReserva.addEventListener('click', ()=>{
  document.getElementById("contenedor1").style.display = "none";
  //partimos mostrando el formulario que está englobado en un div con id formularioInicial
  document.getElementById("formularioInicial").style.display="block";
});

//Variable que trae el botón validar desde HTML
let botonValidar = document.getElementById("validar");

//Botón validar (click en el objeto botón)
botonValidar.addEventListener('click', (validar)=>{
  //Nos trae la información desde el html que está escondida en un principio
  document.getElementById("validacion1").style.display = "block";
  //devuelve una cadena que representa el objeto >>quita que lo que ingresamos se comporte como un formulario<<
  (validar).preventDefault();
  //Variable que extrae el número de la tarjeta ingresada
  let numberCard = document.getElementById('tarjeta').value;

  if(validator.isValid(numberCard)==true){
  document.getElementById("validacion1").innerHTML = "tarjeta correcta";
  document.getElementById("botonConfirmarReserva").style.display = "block";
  if (numberCard==0||numberCard==" "||numberCard==null)
    document.getElementById("validacion1").innerHTML = "Ingresa el número de tu tarjeta";
    return false;
  } else{
  document.getElementById("validacion1").innerHTML = "tarjeta incorrecta";
  }
});

let botonConfirmaReserva = document.getElementById("botonConfirmarReserva");

botonConfirmarReserva.addEventListener('click', ()=>{
  document.getElementById("formularioInicial").style.display="none";
  let porElementos=document.forms["datosReserva"].elements[0].value;
  let porElementos1=document.forms["datosReserva"].elements[1].value;
  let porElementos2=document.forms["datosReserva"].elements[2].value;
  let porElementos3=document.forms["datosReserva"].elements[3].value;
  let porElementos4=document.forms["datosReserva"].elements[4].value;
  let porElementos5=document.forms["datosReserva"].elements[5].value;
  
  let numberCard = document.getElementById('tarjeta').value;
  validator.maskify(numberCard);
  document.getElementById("bloque2").style.display="block";
  document.getElementById("felicitaciones").innerHTML = "Felicitaciones " +porElementos4+ "!";
  document.getElementById("tarjetaOculta").innerHTML = "Su reserva para el día " 
  + porElementos + " de " + porElementos1 + " hasta el día " + porElementos2 + " de " + porElementos3
  + " se a realizado con éxito con la tarjeta " + validator.maskify(numberCard);
  document.getElementById("datosEnviados").innerHTML ="Los datos de esta reserva han sido enviados al email " + porElementos5;
});
