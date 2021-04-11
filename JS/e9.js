'use strict'

let cantidad = prompt("Introduzca cantidad:");
let precio = prompt("Introduzca precio:");
let descuento=0;

if(cantidad>=11 && cantidad<=30){
    descuento=precio*0.05;
    precio=precio-descuento;
}

if(cantidad>=31 && cantidad<=50){
    descuento=precio*0.10;
    precio=precio-descuento;
}

if(cantidad>50){
    descuento=precio*0.15;
    precio=precio-descuento;
}

document.write("El descuento que se le aplica es de ", descuento ," € y el precio es ", precio, " €");