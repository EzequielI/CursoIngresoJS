/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var contador= 0
	var acumulador = 0

	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';

	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese su numeros");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado
		contador++;
		respuesta = prompt("Desea continuar?")
	}
	console.log(numeroIngresado.sort((numeroMinimo, numeroMaximo) => numeroMinimo - numeroMaximo ))
	
	

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN