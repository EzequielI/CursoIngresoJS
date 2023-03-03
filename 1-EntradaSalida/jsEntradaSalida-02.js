/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
let nombre
let respuesta = true;
let lugar;
let temporada;
let cantidaddia = 0;
let importe = 0
let altura = 0;
let peso = 0;
let sexo = 0;
let equipajedemano;
let metododepago;
let temporadaalta = 0;
let temporadabaja = 0;
let pesoacumulado = 0;
let importetotal = 0;
let pesoanterior = 0;
let pesomaspesado = 0;
let pesomasliviano = 0;
let alturaanterior = 0;
let nombremujeralta;
let importeanterior = 0;
let lugarmasvisitado;
let nombrepesado;
let nombreliviano;
let cantidaddiavg = 0;
let cantidaddiapm = 0;
let cantidaddiacor = 0;
let mercado = 0;
let tarjeta = 0;
let efectivo = 0;
let temporadamassolicitada;
let pasajevg = 0;
let pasajepm = 0;
let pasajecor = 0;
let masviajado;

do {
	nombre = prompt("Bienvenido cual es su nombre?")
	
	do {
		lugar = prompt("A donde viaja?");
	} while (lugar != "puerto madryn" && lugar !="villa gessel" && lugar != "cordoba");
	do {
		temporada = prompt("En que temporada viaja?");
	} while (temporada != "alta" && temporada != "baja");
	do {
		cantidaddia = prompt("Cuantos dias de estadia tiene");
		cantidaddia = parseInt(cantidaddia);
	} while (isNaN(cantidaddia));
	do {
		importe = prompt("Cuanto debe pagar?");
		importe = parseInt(importe);
	} while (isNaN(importe));
	do {
		altura = prompt("Cuanto mide usted");
		//altura = parseInt(altura);
	} while (isNaN(altura) || altura > 2.00);
	do {
		peso = prompt("Cuanto pesa usted");
		peso = parseInt(peso);
	} while (isNaN(peso));
	do {
		sexo = prompt("Indiquenos su sexo (f para femenino, m para masculino, o nb)");
	} while (sexo != "f"&& sexo != "m" && sexo != "nb");
	do {
		equipajedemano = prompt("Viaja con equipaje?");
	} while (equipajedemano != "si" && equipajedemano != "no");
	do {
		metododepago = prompt("Como desea pagar?(mercado,tarjeta o efectivo)");
	} while (metododepago != "mercado" && metododepago != "tarjeta" && metododepago != "efectivo");
	//A
	if (temporada == "alta") {
		temporadaalta++;
	} else {
		temporadabaja++;
	}
	//C , B y J
	switch (lugar) {
		case "villa gessel":
			cantidaddiavg = cantidaddiavg + cantidaddia;
			pesoacumulado = pesoacumulado + peso;
			pasajevg++;
			break;
		case "puerto madryn":
			cantidaddiapm = cantidaddiapm + cantidaddia;
			pasajepm++;
			break;
		default:
			cantidaddiacor = cantidaddiacor + cantidaddia;
			pasajecor++;
			break;
	}
	//D
	importetotal = importetotal + importe;
	//2E
	if (peso > pesoanterior) {
		pesomaspesado = peso;
		nombrepesado = nombre
	} else {
		pesomasliviano = peso;
		nombreliviano = nombre
	}
	//F
	if (importe > importeanterior) {
		importeanterior = importeanterior + importe;
		lugarmascaro = lugar;
	}
	//G
	if (sexo == "f" || altura > alturaanterior) {
		alturaanterior = alturaanterior + altura;
		nombremujeralta = nombre;
	}
	//H
	switch (metododepago) {
	case "mercado":
	mercado++;
	break;
	case "efectivo":
	efectivo++;
	break;	
	default:
	tarjeta++;
	break;
	}

	respuesta = confirm("Desea continuar?");
} while (respuesta == true);
//A
document.write("La cantidad de personas que viajan en temporada alta es "+ temporadaalta + " Y las que viajan en temporada baja son "+ temporadabaja);
//B
document.write("<br>El peso total de todas las personas que viajan a villa gessel es de "+ pesoacumulado);
//C
if (cantidaddiavg > cantidaddiapm && cantidaddiavg > cantidaddiacor ) {
	lugarmasvisitado = "villa gessel";
} else {
	if (cantidaddiapm > cantidaddiacor) {
		lugarmasvisitado = "puerto madryn";
	} else {
		lugarmasvisitado = "cordoba";
	}
	
}
document.write("<br>El lugar con mas dias acumulados es "+ lugarmasvisitado);
//D
document.write ("<br>El importe total de todos los pasajes es de "+ importetotal);
//E
document.write("<br>El pasajero mas pesado es "+ nombrepesado + " Y el mas liviano es "+ nombreliviano);
//F 
document.write("<br>El lugar donde se pago mayor importe es en " +lugarmascaro);
//G
document.write("<br>El nombre de la mujer mas alta es "+ nombremujeralta);
//H

//I
if (temporadaalta > temporadabaja) {
	temporadamassolicitada = "alta"
} else {
	temporadamassolicitada = "baja"
	
}
document.write("<br> Se viajo mas durante la temporada "+ temporadamassolicitada);
//J
if (pasajevg > pasajepm && pasajevg > pasajecor) {
	masviajado = "Se viajo mas a villa gessel";
} else {
	if (pasajepm > pasajecor) {
		masviajado = "Se viajo mas a puerto madryn";
	} else {
		masviajado = "Se viajo mas a cordoba";
		
	}
	
}
document.write(masviajado);
}

