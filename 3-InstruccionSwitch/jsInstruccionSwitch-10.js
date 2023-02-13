function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	let destinoingresado = txtIdDestino.value;
	let mensaje;
	
	
	
	
		switch (estacionIngresada) {
			case "Invierno":
				switch (destinoingresado) {
					case "Bariloche":
						mensaje = "Se viaja";
						break;
					case "Cataratas":
					case "Cordoba":
					case "Mar del plata": 
						mensaje = "No se viaja";
						break;
				}	
				break;
				//Verano
			case "Verano":
				switch (destinoingresado) {
					case "Bariloche":
					case "Cordoba":
						mensaje = "No se viaja";
						break;
					case "Cataratas":
					case "Mar del plata": 
						mensaje = "Se viaja";
						break;
				}	
				break;

			case "Otoño":	
					case "Cordoba":
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata": 
						mensaje = "Se viaja";
					break;

			case "Primavera":
				switch (destinoingresado) {
					case "Cordoba":
					case "Cataratas":
					case "Mar del plata": 
						mensaje = "Se viaja";
						break;
					case "Bariloche":
						mensaje = "No se viaja";
					break;
	
				
					
				}	
				break;
		}
	
	alert(mensaje);
	
		

}//FIN DE LA FUNCIÓN