
function mostrar()
{
	let producto;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let contador = 0;
	let jabon = 0;
	let barbijo = 0;
	let alcohol = 0;
	let productoanterior = 0;
	let alcoholmasbarato;
	let sumacantidad = 0;
	let mundoclean = 0;
	let ecobrillo = 0;
	let fabricantebarato;
	let menorcantidad;
	let bandera = true;
	let cantidadanterior = 0;
	let promedio;
	let cantidadmayor;

	do {
		producto = prompt("Ingrese que producto cargar( las opciones son: Jabones, barbijo o alcohol)")
		while (producto != "jabon" && producto != "barbijo" && producto != "alcohol" ){
			producto = prompt("Ingrese un producto existente")
		}
		switch (producto) {
			case "jabon":
			jabon = jabon + 1
			break;
			case "barbijo":
			barbijo = barbijo + 1
			break;
			case "alcohol":
			alcohol = alcohol + 1
			break;			
		}
		//Ingreso y validacion de precio
		do{
			precio = prompt("Ingrese un valor entre 100 y 300");
			precio = parseInt(precio);
		}while(isNaN(precio) || (precio < 100 || precio > 300)) 
		//Ingreso y validacion de cantidad de productos
		do{
			cantidad = prompt("Ingrese un valor de unidades");
			cantidad = parseInt(cantidad);
		}while(isNaN(cantidad))
		while (cantidad <= 0 || cantidad > 1000) {
			cantidad = prompt("Porfavor ingrese una cantidad que no sea 0,negativa ni sobrepase los 1000");
		}
		//Marca y fabricante
		marca = prompt("Ingrese marca del producto(Lysol o Sanitas)");
		while (marca != "lysol" && marca != "sanitas" ) {
			marca = prompt("Porfavor ingrese una marca existente")
		}

		fabricante = prompt("Ingrese el fabricante del producto(Mundo clean o Ecobrillo)");
		while (fabricante != "mundo clean" && fabricante != "ecobrillo") {
			fabricante = prompt("Porfavor ingrese una fabricante existente");
		}
		//A
		if (producto == "alcohol") {
			if (bandera == true) {
				bandera = false
				productoanterior = parseInt(productoanterior);
				productoanterior = productoanterior + precio;
				productoanterior = productoanterior + 1;
			}
			if (precio < productoanterior) {
				alcoholmasbarato = precio;
				fabricantebarato = fabricante;
				menorcantidad = cantidad;
			}
			
		}
		//B
		if (cantidad > cantidadanterior) {
			cantidadanterior = cantidad;
			promedio = precio / cantidad;
			promedio = parseInt(promedio);
		}					
	contador++;
	} while (contador < 5);
	//A
	document.write ("El alcohol mas barato fue de "+ alcoholmasbarato+ "<br>La cantidad de unidades fue de "+ menorcantidad + "<br> El fabricante de este producto fue "+ fabricantebarato);
	//B
	document.write("<br>La mayor cantidad ingresada es " + cantidadmayor +"<br> Y su promedio es de "+ promedio);
	//C
	document.write("<br>El total de unidades de jabon son de "+ jabon);
}