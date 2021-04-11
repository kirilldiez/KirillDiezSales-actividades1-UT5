'use strict'

function temperatura(t){

let k = 0;
let fH= 0;
k= parseFloat(t) + 273,15;
fH=(t * 9/5) +32;
document.write("La temperatura en grados es de ", t , " ºC<br>");
document.write("La temperatura en Kelvin es de ", k , " ºK<br>");
document.write("La temperatura en Fahrenheit es de ", fH ," ºF");

}

let t = prompt("Escribe la temperatura en grados");
temperatura(t);