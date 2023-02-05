function mostrar()
{
	
	let edad;
	let estadoCivil;
	estadoCivil = document.getElementById("estadoCivil").value;
	edad = document.getElementById("txtIdEdad").value ;

	edad = parseInt(edad);

	if (edad == 18 && estadoCivil == "Soltero") {
		
		alert("Es muy pequeño para no ser soltero");
	}










	


}