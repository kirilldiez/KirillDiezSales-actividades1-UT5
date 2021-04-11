'use strinct'

let menores=0;
let adultos=0;
let jubilados=0;


let edad=prompt("Introduzca edad");

while (edad!=0){

 edad=prompt("Introduzca edad");

if (edad<0 || edad>150){
    console.error("Edad no válida!");
}

if(edad<18 && edad>0 )
    menores++
if (edad>=18 && edad<=65)
    adultos++
if(edad>65 && edad<150)
    jubilados++

}

document.write("Número de menores: "+ menores, "<br>");
document.write("Número de adultos: "+ adultos, "<br>");
document.write("Número de jubilados: "+ jubilados);