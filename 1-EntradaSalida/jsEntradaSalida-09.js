/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let Numero1;
	let Resultado;
	let Resultadofinal;

	Numero1 = document.getElementById("txtIdSueldo").value;
	
	Numero1 = parseInt(Numero1);
	Resultado = parseInt(Resultado);
	Resultadofinal = parseInt(Resultadofinal);



	Resultado = Numero1 * 10/100;

	Resultadofinal = Numero1 + Resultado;

	document.getElementById("txtIdResultado").value = Resultadofinal;








}
