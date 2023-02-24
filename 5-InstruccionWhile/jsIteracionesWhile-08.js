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
	
	sumaPositivos=0;
	multiplicacionNegativos=1;
	acumulador = parseInt(acumulador);
	//Ingresa el numero y valida
	do{
		do{
		numeroIngresado = prompt("Ingrese un numero real");
		numeroIngresado = parseInt(numeroIngresado);
		}while(isNaN(numeroIngresado))
	//Si es negativo
	if (numeroIngresado <= 0 ) {
		numeroIngresado = numeroIngresado * multiplicacionNegativos;
		multiplicacionNegativos = numeroIngresado;
		contador++;
	//Si es positivo
	}else{
		acumulador = numeroIngresado + sumaPositivos;
		sumaPositivos = acumulador
	}
	respuesta = confirm("Desea continuar?")
	}while((respuesta))
	
	txtIdSuma.value=sumaPositivos;
	if (contador == 0) {
		txtIdProducto.value="No ingreso ningun numero negativo";
	} else {
		txtIdProducto.value=multiplicacionNegativos;
	}
	
}//FIN DE LA FUNCIÓN