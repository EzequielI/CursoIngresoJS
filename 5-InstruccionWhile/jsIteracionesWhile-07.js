/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador= 0
	var acumulador = 0
	var numeroIngresado;
	var respuesta;
	respuesta='si';

	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese su numeros");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado
		contador = contador + 1
		respuesta = prompt("Desea continuar?")
	}
	
	
	

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN