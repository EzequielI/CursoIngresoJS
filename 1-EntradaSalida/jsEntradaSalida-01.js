/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	let cantidadfilas = 0;
	let contadorasteriscos = 1;
	do {
		cantidadfilas = prompt("Ingrese su cantidad de filas");
		cantidadfilas = parseInt(cantidadfilas);
	} while (isNaN(cantidadfilas)||cantidadfilas<0);


	for (let i = 0; i < cantidadfilas; i++) {
		let asteriscos = "";
		let espacios = "";
		for (let j = 0; j < cantidadfilas+ 2 - i; j++) {
			espacios += " ";
			
		}
		for (let i = 0; i < contadorasteriscos; i++) {
			asteriscos += "*";
			
		}
		console.log (espacios + asteriscos + espacios);
		contadorasteriscos += 2;
	}
}

