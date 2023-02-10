function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mensajeinvierno ="Abrigate que hace frio";
	let mensajeantesdeinvierno = "Falta para el invierno";
	let mensajedespuesdeinvierno = "Ya pasamos el frio, ahora el calor!!!";

	switch (mesDelAño) {
		//invierno
		case "Junio" :
		case "Julio":
		case "Agosto" :
		case "Septiembre":
			alert(mensajeinvierno);
			break;
		//Antes de invierno
		case "Enero":	
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
			alert(mensajeantesdeinvierno);
			break;
		//Ya paso el invierno
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert(mensajedespuesdeinvierno);
			break;
			
	}







}//FIN DE LA FUNCIÓN