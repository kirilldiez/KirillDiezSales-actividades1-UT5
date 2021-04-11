'use strict'

function calcularMayor(a){

let array_a=a.split(" ");

if (array_a.length!=3){
    console.log("Error. Debe introducir 3 números");
    return false;
}
    
let mayor=array_a[0];

if(array_a[1] > mayor){
    mayor = array_a[1];
}
if(array_a[2] > mayor){
    mayor = array_a[2];
}
return mayor;
}

function calcularMenor(a){

let array_a=a.split(" ");

if (array_a.length!=3){
    console.log("Error. Debe introducir 3 números");
    return false;
}

let menor = array_a[0];

if(array_a[1] < menor){
    menor = array_a[1];
}
if(array_a[2] < menor){
    menor = array_a[2];
}
return menor;
}

let a = prompt("Introduce 3 números separados por espacios:");
calcularMayor(a);
calcularMenor(a);

document.write("El mayor es: " + calcularMayor(a) + "<br>");
document.write("El menor es: " + calcularMenor(a));