//Llamamos aL objeto para que arroje el resultado
import validator from './validator.js';
//Variable que trae el botón validar desde HTML
let botonValidar = document.getElementById("validar");
//Botón validar (click en el objeto botón)
botonValidar.addEventListener('click', (validar)=>{
  //devuelve una cadena que representa el objeto
  (validar).preventDefault();
  //Variable que extrae el número de la tarjeta ingresada
  let numberCard = document.getElementById('tarjeta').value;
  validator.isValid(numberCard);
});

let botonConfirmaReserva = document.getElementById("botonConfirmarReserva");
botonConfirmarReserva.addEventListener('click', ()=>{
  window.location.href = "confirmation.html";
  let numberCard = document.getElementById('tarjeta').value;
  validator.maskify(numberCard);
  document.getElementById("tarjetaOculta").innerHTML = "holi" + validator.maskify();
});

  
