'use strict'
function escribirTablaMultiplicar(num){
    
	document.write("<h2>Tabla de multiplicar del "+ num +"</h2>");

	document.write("<ul>");


	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(num + " x " + i + " = " + num * i);
		document.write("</li>");
	}

	document.write("</ul>");
}
let num=prompt("Escribe un numero: ");
escribirTablaMultiplicar(num);