/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let Numero1;
	let Numero2;
	var Resultado;

	Numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	Numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	//Numero1 = parseInt(Numero1)
	//Numero2 = parseInt(Numero2)
	Resultado = Numero1 + Numero2;
	
	
	alert("El resultado es " + Resultado );






}

