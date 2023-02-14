/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var contador= 0;
	var numeroIngresado;
	respuesta='si';
	sumaPositivos=0;
	multiplicacionNegativos=1;

//Eleccion de numero
while (respuesta == "si") {
	respuesta = prompt("Hola, va a querer sumar numeros positivos o negativos?");
//Si se elige positivos
	while (respuesta == "positivos") {
		respuesta = prompt("Listo para cargar los numeros?");
		while (respuesta == "si") {
			numeroIngresado = prompt("Ingrese su numeros");
			numeroIngresado = parseInt(numeroIngresado);
			sumaPositivos += numeroIngresado
			contador = contador + 1
			respuesta = prompt("Desea continuar?")
	}
	
} //Si se elige negativos
while (respuesta == "negativos") {
	respuesta = prompt("Listo para cargar los numeros?");
		while (respuesta == "si") {
			numeroIngresado = prompt("Ingrese su numeros");
			numeroIngresado = parseInt(numeroIngresado);
			multiplicacionNegativos *= numeroIngresado;
			contador = contador + 1
			respuesta = prompt("Desea continuar?")
	}
}//Posibilidad de cargar mas datos
	respuesta = prompt("Desea cargar nuevos numeros positivos o negativos?");
	
}
	
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
}//FIN DE LA FUNCIÓN