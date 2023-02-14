function mostrar()
{
	var contador= 0
	var acumulador = 0
	var numeroIngresado;
	

	while (contador < 5) {
		numeroIngresado = prompt("Ingrese 5 numeros");
		numeroIngresado = parseInt(numeroIngresado)
		
		contador++

		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Ingrese un numero real");
			numeroIngresado = parseInt(numeroIngresado);
		}
		acumulador += numeroIngresado
	}
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN