/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	

	while (numeroIngresado >= 9 || numeroIngresado < 0 ) {
		alert("Numero invalido, pruebe devuelta");
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	}
	alert("Numero aceptado");
	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN