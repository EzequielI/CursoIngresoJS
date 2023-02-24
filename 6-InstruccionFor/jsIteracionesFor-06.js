function mostrar()
{
	let numero;

	numero = prompt("ingrese un numero");
	numero = parseInt(numero);
	
	for (let i = 1; i <= numero; i++) {
		
		if (i % 2 == 0) {
			document.write(i + "-")
		}
	
	}

}//FIN DE LA FUNCIÓN