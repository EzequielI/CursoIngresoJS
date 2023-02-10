function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	let mensajemañana = "Es de mañana";
	let mensajetarde = "Es de tarde";
	let mensajenoche = "Es de noche";
	horaDelDia = parseInt(horaDelDia);

	switch (horaDelDia) {
		case 20:	
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert(mensajenoche);
			break;
		case 7:
		case 8:	
		case 9:
		case 10:
		case 11:
			alert(mensajemañana);
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert(mensajetarde);
			break;


		default:
			alert("La hora no existe");
			break;
	}
}//FIN DE LA FUNCIÓN