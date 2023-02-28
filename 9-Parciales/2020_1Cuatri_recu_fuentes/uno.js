
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
	let jabonmascaro;
	let fabricantemascaro;
	let mayorcantidad;
	let bandera = true;
	let promedio;
	let cantidadjabon= 0;
	let cantidadbarbijo = 0;
	let cantidadalcohol = 0;
	let preciojabon = 0;
	let preciobarbijo = 0;
	let precioalcohol = 0;
	let cantidadmasgrande;
	let cantidadbarbijosfinal = 0;
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
			if (bandera == true) {
				bandera = false
				jabonmascaro = precio;
				fabricantemascaro = fabricante;
				mayorcantidad = cantidad;
				productoanterior = precio;
			}else{if (precio > productoanterior) {
				jabonmascaro = precio;
				fabricantemascaro = fabricante;
				mayorcantidad = cantidad;
				productoanterior = precio;}
			}
			break;
			case "barbijo":
			barbijo = barbijo + 1
			preciobarbijo = precio + preciobarbijo;
			cantidadbarbijo = cantidad + cantidadbarbijo;
			cantidadbarbijosfinal = cantidadbarbijosfinal + cantidad;
			break;
			case "alcohol":
			alcohol = alcohol + 1
			precioalcohol = precio + precioalcohol;
			cantidadalcohol = cantidad + cantidadalcohol;
			break;			
		}		
		contador++;
	} while (contador < 5);
	//A 
	document.write("La cantidad de jabon mas caro ingresado fue de "+ mayorcantidad + "Y su fabricante fue " + fabricantemascaro )
	//B
	if (cantidadalcohol > cantidadbarbijo && cantidadalcohol > cantidadjabon) {
		cantidadmasgrande = "Alcohol";
		promedio = precioalcohol / cantidadalcohol;
	}else {
		if (cantidadbarbijo > cantidadjabon) {
		  cantidadmasgrande = "Barbijo";
		  promedio = preciobarbijo / cantidadbarbijo;
		} 	
		else {
			cantidadmasgrande = "Jabon";
			promedio = preciojabon / cantidadjabon;
		}
	  }
	promedio = parseInt(promedio)
	document.write("Se compraron mayor cantidad de unidades de "+ cantidadmasgrande + " y el promedio de la compra es de"+ promedio);
	//C
	document.write("<br>Se compraron en total un total de "+ cantidadbarbijosfinal)
}