/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre = prompt("Escriba su nombre");
	txtIdNombre.value = nombre;
	
	alert(nombre);
}

