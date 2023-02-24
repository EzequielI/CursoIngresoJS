function mostrar()
{
	let numeroingresado;
	numeroingresado = prompt("Ingrese un numero");
	for (let i = 0; i < numeroingresado;) {
		if (numeroingresado % 1 == 0 && numeroingresado % numeroingresado == 0) {
			document.write("Este numero es primo");
		}else{
			document.write("Este numero no es primo");
		}
		break;
	}


}//FIN DE LA FUNCIÓN