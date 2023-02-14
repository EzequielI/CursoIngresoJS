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
	let acumulador;
	respuesta='si';
	sumaPositivos=0;
	multiplicacionNegativos=1;
	acumulador = parseInt(acumulador);
	//Ingresa el numero
	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese su numeros");
		numeroIngresado = parseInt(numeroIngresado);
		//Valida
			while (isNaN(numeroIngresado)) {
				numeroIngresado = prompt("Ingrese un numero real");
				numeroIngresado = parseInt(numeroIngresado);}
		//Si es negativo
		if (numeroIngresado <= 0 ) {
			numeroIngresado = numeroIngresado * multiplicacionNegativos;
			multiplicacionNegativos = numeroIngresado;
		//Si es positivo
			}else{
				acumulador = numeroIngresado + sumaPositivos;
				sumaPositivos = acumulador}
		contador++;
		respuesta = prompt("Desea continuar?")
	}
	
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
}//FIN DE LA FUNCIÓN