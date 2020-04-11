//Llamamos aL objeto para que arroje el resultado
import validator from './validator.js';

document.getElementById("formularioInicial").style.display="block";

//Variable que trae el botón validar desde HTML
let botonValidar = document.getElementById("validar");
//Botón validar (click en el objeto botón)
botonValidar.addEventListener('click', (validar)=>{
  document.getElementById("validacion1").style.display = "block";
  //devuelve una cadena que representa el objeto
  (validar).preventDefault();
  //Variable que extrae el número de la tarjeta ingresada
  let numberCard = document.getElementById('tarjeta').value;
  if(validator.isValid(numberCard)==true){
    document.getElementById("validacion1").innerHTML = "tarjeta correcta";
    document.getElementById("botonConfirmarReserva").style.display = "block";
  } else{
    document.getElementById("validacion1").innerHTML = "tarjeta incorrecta";
  }
});

let botonConfirmaReserva = document.getElementById("botonConfirmarReserva");

botonConfirmarReserva.addEventListener('click', ()=>{
  document.getElementById("formularioInicial").style.display="none";
  let numberCard = document.getElementById('tarjeta').value;
  validator.maskify(numberCard);
  document.getElementById("bloque2").style.display="block";
  document.getElementById("tarjetaOculta").innerHTML = "Su reserva se a realizado con éxito con la tarjeta " + validator.maskify(numberCard);
});