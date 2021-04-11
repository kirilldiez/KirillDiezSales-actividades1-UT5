'use strict'

let fecha = prompt("Escriba su fecha de nacimiento (día/mes/año):");

function calcularEdad(fecha){

let hoy = new Date();
let array_fecha=fecha.split("/");
if (array_fecha.length!=3)
    return false;

let año;
año=parseInt(array_fecha[2]);
if (isNaN(año))
    return false;

let mes;
mes=parseInt(array_fecha[1]);
if (isNaN(mes))
    return false;

let dia;
dia=parseInt(array_fecha[0]);
if (isNaN(dia))
    return false;

if (año <=99)
    año +=1900;

let edad = hoy.getFullYear() - año -1;
if (hoy.getMonth()+1-mes<0)
    return edad;
if(hoy.getMonth()+1-mes>0)
    return edad+1;
if(hoy.getUTCDate()-dia>=0)
    return edad+1;
 
return edad;

}


calcularEdad(fecha);
console.log(calcularEdad(fecha));

if (calcularEdad(fecha)>=65){
    document.write("Está jubilado/a");
}
else{
    document.write("No está jubilado/a");
}