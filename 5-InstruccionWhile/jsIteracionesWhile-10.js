/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
	function mostrar()
{	// declarar variables
	var numeroIngresado;
	var respuesta;
	var sumaPositivos;
	var sumaNegativos;
	let acumulador;
	let acumuladornegativos;
	var contadorpositivos= 0;
	let contadornegativos = 0;
	let contadorceros = 0;
	let contadorpares = 0;
	let promediopositivo;
	let promedionegativo;
	let diferencia;

	sumaPositivos=0;
	sumaNegativos=0;
	
	acumulador = parseInt(acumulador);
	//Ingresa el numero
	do{

		do{numeroIngresado = prompt("Ingrese un numero real");
			numeroIngresado = parseInt(numeroIngresado);
		}while (isNaN(numeroIngresado))
			//Si es negativo
		if (numeroIngresado < 0 ) {
			acumuladornegativos = numeroIngresado + sumaNegativos;
			sumaNegativos = acumuladornegativos;
			contadornegativos++;
			//Si es positivo
		}else{ if (numeroIngresado > 0) {
			acumulador = numeroIngresado + sumaPositivos;
			sumaPositivos = acumulador;
			contadorpositivos++;}
		}
		// Si son ceros
		if (numeroIngresado == 0) {
			contadorceros++;
		}
		//Los pares ingresados
		if (numeroIngresado % 2 == 0) {
			contadorpares++;
		}
	
	
		respuesta = confirm ("Desea continuar?")
	}while(respuesta);

	promedionegativo = sumaNegativos / contadornegativos;
	promediopositivo = sumaPositivos / contadorpositivos;
	promedionegativo = parseInt(promedionegativo);
	promediopositivo = parseInt(promediopositivo);
	diferencia = contadornegativos - contadorpositivos;
	if (diferencia < 0) {
		diferencia = diferencia * -1;
	}
	document.write ("La suma de los negativos es "+ sumaNegativos + "<br> la suma de positivos es "+ sumaPositivos + "<br> la cantidad de positivos ingresados es "+ contadorpositivos +
	"<br> la cantidad de negativos ingresados es "+ contadornegativos + "<br> la cantidad de ceros ingresados es "+ contadorceros +"<br> la cantidad de numeros pares ingresado es "+ contadorpares + 
	"<br> el promedio de los numeros positivos es " + promediopositivo + "<br> el promedio de numeros negativos es "+ promedionegativo + " <br> la diferencia entre los positivos y negativos es "
	+ diferencia)
}
//FIN DE LA FUNCIÓN

