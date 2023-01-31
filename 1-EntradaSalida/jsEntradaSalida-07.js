/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let Numero1;
	let Numero2;
	let Resultado;

	Numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	Numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);


	Resultado = Numero1 + Numero2;
	
	
	alert("El resultado de la suma es " + Resultado );


}

function restar()
{

	let Numero1;
	let Numero2;
	let Resultado;

	Numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	Numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);


	Resultado = Numero1 - Numero2;
	
	
	alert("El resultado de la resta es " + Resultado );


}

function multiplicar()
{ 
	
	let Numero1;
	let Numero2;
	let Resultado;

	Numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	Numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);


	Resultado = Numero1 * Numero2;
	
	
	alert("El resultado de la multiplicacion es " + Resultado );
}

function dividir()
{
	
	let Numero1;
	let Numero2;
	let Resultado;

	Numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	Numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);


	Resultado = Numero1 % Numero2;
	
	
	alert("El resultado de la division es " + Resultado );
}

