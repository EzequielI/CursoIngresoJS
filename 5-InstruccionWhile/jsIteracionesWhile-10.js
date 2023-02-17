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
	var contadorpositivos= 0;
	let acumulador;
	let contadornegativos = 0;
	let contadorceros = 0;
	let contadorpares = 0;
	let promediopositivo;
	let promedionegativo;
	let diferencia;
	let acumuladornegativos;

	respuesta='si';
	sumaPositivos=0;
	sumaNegativos=0;
	
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
		if (numeroIngresado < 0 ) {
			
			acumuladornegativos = numeroIngresado + sumaNegativos;
			//sumaNegativos = parseInt(sumaNegativos);
			sumaNegativos = acumuladornegativos;
			contadornegativos++;
		//Si es positivo
			}else{ if (numeroIngresado > 0) {
				acumulador = numeroIngresado + sumaPositivos;
				sumaPositivos = acumulador;
				contadorpositivos++;}
			}
			
		if (numeroIngresado == 0) {
			contadorceros++;
		}
		if (numeroIngresado % 2 == 0) {
			contadorpares++;
		}


	respuesta = prompt("Desea continuar?")
	
	}

	promedionegativo = sumaNegativos / contadornegativos;
	promediopositivo = sumaPositivos / contadorpositivos;
	promedionegativo = parseInt(promedionegativo);
	promediopositivo = parseInt(promediopositivo);
	diferencia = contadornegativos - contadorpositivos;
	if (diferencia < 0) {
		diferencia = diferencia * -1;
	}
	document.write ("La suma de los negativos es "+ sumaNegativos + ", la suma de positivos es "+ sumaPositivos + ", la cantidad de positivos ingresados es "+ contadorpositivos +
	", la cantidad de negativos ingresados es "+ contadornegativos + ", la cantidad de ceros ingresados es "+ contadorceros +", la cantidad de numeros pares ingresado es "+ contadorpares + 
	", el promedio de los numeros positivos es " + promediopositivo + ", el promedio de numeros negativos es "+ promedionegativo + " y la diferencia entre los positivos y negativos es "
	+ diferencia)
}
//FIN DE LA FUNCIÓN