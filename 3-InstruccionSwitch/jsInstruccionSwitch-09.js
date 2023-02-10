function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	let destinoingresado = txtIdDestino.value;
	let preciobase = 15000;
	let aumento;
	let descuento;
	preciobase = parseInt(preciobase);
	aumento = parseInt(aumento);



	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoingresado) {
				case "Bariloche":
					aumento = 20/100;
					aumento = preciobase * aumento;
					preciobase = preciobase + aumento;

					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 10/100;
					descuento = preciobase * descuento;
					preciobase = preciobase - descuento;
					break;
				case "Mar del plata": 
					descuento = 20/100;
					descuento = preciobase * descuento;
					preciobase = preciobase - descuento;
					break;
			
				
			}	
			break;
			//Verano
		case "Verano":
			switch (destinoingresado) {
				case "Bariloche":
					descuento = 20/100;
					descuento = preciobase * descuento;
					preciobase = preciobase - descuento;

					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 10/100;
					aumento = preciobase * aumento;
					preciobase = preciobase + aumento;
					break;
				case "Mar del plata": 
					aumento = 20/100;
					aumento = preciobase * aumento;
					preciobase = preciobase + aumento;
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
					aumento = preciobase * aumento;
					preciobase = preciobase + aumento;
					break;
				

			
				
			}	
	}
	


	alert("El precio de estadia sera "+ preciobase);






}//FIN DE LA FUNCIÓN