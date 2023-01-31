/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let Numero1;
	let Numero2;
	let Resultado;


	Numero1 = document.getElementById("txtIdNumeroDividendo").value;
	Numero2 = document.getElementById("txtIdNumeroDivisor").value;

	Numero1 = parseInt(Numero1);
	Numero2 = parseInt(Numero2);
	

	Resultado = Numero1 % Numero2 

	alert("El resto es " + Resultado)


}
