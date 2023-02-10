function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mensajedeNOfebrero ="Este  mes tiene 30 o mas dias";

	switch (mesDelAño) {
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
	
		default:
			alert(mensajedeNOfebrero);
			break;
	}
	
	


}//FIN DE LA FUNCIÓN