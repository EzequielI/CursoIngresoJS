/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let Numero1;
	let Resultado;

	Numero1 = parseInt(Numero1);
	Resultado = parseInt(Resultado);

	Numero1 = document.getElementById("txtIdSueldo").value;


	Resultado = Numero1 * 10/100;

	document.getElementById("txtIdResultado").value = Resultado








}
