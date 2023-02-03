function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value ;

	edad = parseInt(edad);

	
	if (edad <= 12) {
		
		alert("Usted no es un adolescente");
	} 
	if (edad >= 18) {
		alert("Usted no es un adolescente")
	}

}