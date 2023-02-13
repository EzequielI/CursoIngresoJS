function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	let destinoingresado = txtIdDestino.value;
	let preciobase = 15000;
	let preciodescuento;
	let precioaumento;
	let aumento;
	let descuento;
	let descuentoOaumento;
	preciobase = parseInt(preciobase);
	aumento = parseInt(aumento);
	descuento = parseInt(descuento);
	preciobdescuento = parseInt(preciodescuento);
	precioaumento = parseInt(precioaumento);



	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoingresado) {
				case "Bariloche":
					aumento = 20/100;
					descuentoOaumento = "Aumento"
					

					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 10/100;
					descuentoOaumento = "Descuento"
					break;
				case "Mar del plata": 
					descuento = 20/100;
					descuentoOaumento = "Descuento"
					break;
			
				
			}	
			break;
			//Verano
		case "Verano":
			switch (destinoingresado) {
				case "Bariloche":
					descuento = 20/100;
					descuentoOaumento = "Descuento"

					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 10/100;
					descuentoOaumento = "Aumento"
					break;
				case "Mar del plata": 
					aumento = 20/100;
					descuentoOaumento = "Aumento"
					break;
			
				
			}	
			break;
		case "Otoño":	
		case "Primavera":
			switch (destinoingresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata": 
					aumento = 10/100;
					descuentoOaumento = "Aumento"
					break;
				

			
				
			}	
	}
	switch (descuentoOaumento) {
		case "Descuento":
			preciodescuento = preciobase * descuento
			preciodescuento = preciobase - preciodescuento
			alert("El precio de estadia sera "+ preciodescuento);
			break;
	
		case "Aumento":
			precioaumento = preciobase * aumento
			precioaumento = preciobase + precioaumento
			alert("El precio de estadia sera "+ precioaumento)
			break;
	}


	






}//FIN DE LA FUNCIÓN