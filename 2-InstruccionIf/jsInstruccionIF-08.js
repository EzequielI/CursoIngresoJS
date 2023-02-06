function mostrar()
{
	let edad;
	let estadoCivil;
	estadoCivil = document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value ;

	edad = parseInt(edad);


	if (edad < 18 || estadoCivil != "Soltero") {
		//Si es verdadero
		

	} 
	
	else {//Si es falso
		
		alert("Es soltero y no es menor")
	}



}