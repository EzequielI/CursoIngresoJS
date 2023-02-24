function mostrar()
{
	let contador;
	let contadorpedido
	do{contadorpedido = prompt("Ingrese el numero 9");
			contadorpedido = parseInt(contadorpedido);
		}while (isNaN(contadorpedido));
	
	for (let contador = contadorpedido; contador != 9; ) {
		while (contador != 9 ) {
			contadorpedido = prompt("Ingrese el numero 9 porfavor");
			contador = contadorpedido;
		}
	}


}//FIN DE LA FUNCIÓN
