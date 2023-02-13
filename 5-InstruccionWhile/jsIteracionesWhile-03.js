/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	let clave = "utn750";
	claveIngresada = prompt("ingrese el número clave.");
	while (claveIngresada != clave) {
		alert("Clave incorrecta, pruebe devuelta");
		claveIngresada = prompt("ingrese el número clave.");
	}
	alert("Clave aceptada");
}//FIN DE LA FUNCIÓN
