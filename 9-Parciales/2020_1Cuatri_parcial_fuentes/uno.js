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
	let mundoclean = 0;
	let ecobrillo = 0;
	let fabricantebarato;
	let menorcantidad;
	let bandera = true;
	let cantidadanterior = 0;
	let promedio;
	let cantidadmayor;
	let cantidadjabon= 0;
	let cantidadbarbijo = 0;
	let cantidadalcohol = 0;
	let productomayor;
	let preciojabon = 0;
	let preciobarbijo = 0;
	let precioalcohol = 0;
	let cantidadmasgrande;
	let cantidadjabonpuntoc = 0;
	do {
		producto = prompt("Ingrese que producto cargar( las opciones son: Jabones, barbijo o alcohol)")
		while (producto != "jabon" && producto != "barbijo" && producto != "alcohol" ){
			producto = prompt("Ingrese un producto existente")
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
		switch (producto) {
			case "jabon":
			jabon = jabon + 1
			preciojabon = precio + preciojabon;
			cantidadjabon = cantidad + cantidadjabon;
			cantidadjabonpuntoc = cantidadjabonpuntoc + cantidad;
			break;
			case "barbijo":
			barbijo = barbijo + 1
			preciobarbijo = precio + preciobarbijo;
			cantidadbarbijo = cantidad + cantidadbarbijo;
			break;
			case "alcohol":
			alcohol = alcohol + 1
			precioalcohol = precio + precioalcohol;
			cantidadalcohol = cantidad + cantidadalcohol;
			if (bandera == true) {
				bandera = false
				alcoholmasbarato = precio;
				fabricantebarato = fabricante;
				menorcantidad = cantidad;
				productoanterior = precio;
			}else{if (precio < productoanterior) {
				alcoholmasbarato = precio;
				fabricantebarato = fabricante;
				menorcantidad = cantidad;
				productoanterior = precio;}
			}
			break;			
		}		
		contador++;
	} while (contador < 5);
	//Termina la recoleccion de datos
	//A
	document.write ("El alcohol mas barato fue de "+ alcoholmasbarato+ "<br>La cantidad de unidades fue de "+ menorcantidad + "<br> El fabricante de este producto fue "+ fabricantebarato);
	//B
	if (alcohol > barbijo && alcohol > jabon) {
		cantidadmasgrande = "Alcohol";
		promedio = precioalcohol / cantidadalcohol;
	  }else {
		if (barbijo > jabon) {
		  cantidadmasgrande = "Barbijo";
		  promedio = preciobarbijo / cantidadbarbijo;
		} else {
			cantidadmasgrande = "Jabon";
			promedio = preciojabon / cantidadjabon;
		  
		}
	  }
	  promedio = parseInt(promedio);
	document.write("<br>La mayor cantidad ingresada es de " + cantidadmasgrande +"<br> Y su promedio es de "+ promedio);
	//C
	document.write("<br>El total de unidades de jabon son de "+ cantidadjabon);
}