function mostrar()
{
	let edad;
	let estadoCivil;
	estadoCivil = document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value ;

	edad = parseInt(edad);


	if (edad > 17 && estadoCivil == "Soltero") {
		//Si es verdadero
		alert("Es soltero y no es menor")

	} 
	
	else {//Si es falso
		
		
	}



}