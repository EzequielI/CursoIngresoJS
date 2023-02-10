function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let mensaje;
	
	
	switch (destinoIngresado) {
		case "Bariloche":
			mensaje = "Este destino se encuentra al Oeste";
			break;
		case "Cataratas":
			mensaje = "Este destino se encuentra al Norte";
			break;
		case "Mar del plata":
		case "Ushuaia":
			mensaje = "Este destino se encuentra al Sur"
			break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN