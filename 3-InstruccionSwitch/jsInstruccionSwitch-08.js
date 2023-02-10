function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let mensaje;
	
	
	switch (destinoIngresado) {
		case "Ushuaia":
		case "Bariloche":
			mensaje = "En este destino hace frio";
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = "En este destino hace calor";
			break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN