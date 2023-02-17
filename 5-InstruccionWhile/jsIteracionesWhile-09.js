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
	let bandera = true
	

	do {
		do{
			numeroIngresado = prompt ("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
	} while(isNaN(numeroIngresado))
	
	if (bandera == true) {
		bandera = false;
		numeroMaximo = numeroIngresado;
		numeroMinimo = numeroIngresado;
	} 	else {
			if (numeroMinimo < numeroIngresado) {
				numeroMaximo = numeroIngresado
}					else{numeroMinimo = numeroIngresado }
							acumulador = numeroIngresado
							contador++;}
	respuesta = confirm("Desea continuar?");

	}while(respuesta);
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN
