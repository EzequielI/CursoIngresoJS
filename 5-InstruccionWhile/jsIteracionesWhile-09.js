/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var contador= 0
	var acumulador = 0

	//iniciar variables
	respuesta='si';

	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese su numeros");
		numeroIngresado = parseInt(numeroIngresado);
			while (isNaN(numeroIngresado)) {
				numeroIngresado = prompt("Ingrese un numero real");
				numeroIngresado = parseInt(numeroIngresado);}
		if (numeroMinimo < numeroIngresado) {
			numeroMaximo = numeroIngresado
		}else{numeroMinimo = numeroIngresado }
		acumulador = numeroIngresado
		contador++;
		respuesta = prompt("Desea continuar?")
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN