function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value ;

	edad = parseInt(edad);

	
	if (edad <= 12) {
		
		alert("Usted es un menor");
	} 

	if (edad >= 13 && edad <= 17) {
		
		alert("Usted es un adolescente");
	} 

	if (edad >= 18) {
		alert("Usted es un mayor")
	}


}