function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mescon28dias = "Tiene 28 dias";
	let mescon30dias = "Tiene 30 dias";
	let mescon31dias = "Tiene 31 dias";

	switch (mesDelAño) {
		case "Febrero":
			alert(mescon28dias);
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert(mescon30dias);
		break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert(mescon31dias);
			break;
	}

}//FIN DE LA FUNCIÓN