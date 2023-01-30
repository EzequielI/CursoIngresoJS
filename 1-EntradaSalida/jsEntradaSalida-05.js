/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre = prompt("Escriba su nombre");
	let edad = prompt("Ponga su edad");

	txtIdNombre.value = nombre
	txtIdEdad.value= edad

	alert("Entonces su nombre es  " + txtIdNombre.value);
	alert("Y tiene  " + txtIdEdad.value )
}

