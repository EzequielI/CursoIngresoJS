function mostrar()
{
	let numeroingresado;
	let divididos= 0;
	do{
		numeroingresado = prompt("Ingrese un numero");
		numeroingresado = parseInt(numeroingresado);
	}while(isNaN(numeroingresado));
	
	for (let i = 1; i <=numeroingresado;i++ ) {
		if (numeroingresado % i == 0) {
			divididos++;
		}
	}
		if (divididos == 2) {
			document.write("Este numero es primo");
		}else{
			document.write("Este numero no es primo");
		}
	
}//FIN DE LA FUNCIÓN