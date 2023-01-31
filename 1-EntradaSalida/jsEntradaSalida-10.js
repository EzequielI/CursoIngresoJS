/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let Numero1;
	let Resultado;
	let Resultadofinal;

	Numero1 = document.getElementById("txtIdImporte").value;

	Numero1 = parseInt(Numero1);
	Resultado = parseInt(Resultado);
	Resultadofinal = parseInt(Resultadofinal);


	


	Resultado = Numero1 * 25/100;

	Resultadofinal = Numero1 - Resultado;

	document.getElementById("txtIdResultado").value = Resultadofinal;



}
