function mostrar()
{
	let numero;
	let contadordivisores = 0;
	numero = prompt("ingrese un numero");
	numero = parseInt(numero);
	
	for (let i = 1; i <= numero; i++) {
		
		if (numero % i == 0) {
			document.write(i + "-")
			contadordivisores++;
		}
	
	}
	document.write("<br>El total de numeros divisores fue de "+ contadordivisores);
}//FIN DE LA FUNCIÓN