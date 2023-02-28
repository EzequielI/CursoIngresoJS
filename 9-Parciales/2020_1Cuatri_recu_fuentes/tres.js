function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadocivil;
	let temperaturacorporal = 0;
	let temperaturacorporalmasalta = 0;
	let bandera = true;
	let mayor17 = 0;
	let mujeressolteras = 0;
	let mujeresviudas = 0;
	let mayorcontemperatura38 = 0;
	let mujerescasadas = 0;
	let promedio = 0;
	let respuesta;
	let edadcasadas = 0;
do {
	//Nombre
	do {
		nombre = prompt("Bienvenido ingrese su nombre porfavor");
	} while (nombre == ""|| !isNaN(nombre));
	//Nacionalidad
	do {
		nacionalidad = prompt("Ingrese su nacionalidad");
	} while (nacionalidad == ""|| !isNaN(nacionalidad));
	//Edad
	do{
        edad = prompt("Ingrese su edad");
        edad = parseInt(edad);
    }while(isNaN(edad) || edad < 0)
	//Sexo
	sexo = prompt("Ingrese su sexo (f o m)")
	while (sexo != "f" && sexo != "m") {
		sexo = prompt("Porfavor ingrese un sexo valido");
	} 
	//Estado civil
	estadocivil = prompt("Usted esta soltero, casado o viudo?")
	while (estadocivil != "soltero" && estadocivil != "casado" && estadocivil != "viudo") {
		estadocivil = prompt("Porfavor ingrese un estado civil correcto");
	}
	//Temperatura corporal
	temperaturacorporal = prompt("Ingrese su temperatura corporal registrada porfavor");
	do{
		temperaturacorporal = prompt("Ingrese su temperatura corporal registrada porfavor");
    }while(isNaN(temperaturacorporal) || (temperaturacorporal < 35 || temperaturacorporal > 44))
	//A
		if (bandera == true) {
			bandera = false
			temperaturacorporalmasalta = parseInt(temperaturacorporalmasalta);
			temperaturacorporal = parseInt(temperaturacorporal);
			temperaturacorporalmasalta = temperaturacorporalmasalta + temperaturacorporal;
			nacionalidaddepersonacontemperatura = nacionalidad;
		}else{
			if (temperaturacorporal > temperaturacorporalmasalta) {
			temperaturacorporalmasalta = temperaturacorporal
			nacionalidaddepersonacontemperatura = nacionalidad}
		}
	//B
	if (edad >= 17 && estadocivil == "soltero") {
		mayor17++;
	}
	//C
	switch (estadocivil) {
		case "soltero":
			if (edad >= 17) {
			mayor17++;
			}
			if (sexo == "f") {
			mujeressolteras++;
			}	
		break;
		case "viudo":
			if (sexo == "f") {
				mujeresviudas++;
			}	
		break;
		case "casado":
			if (sexo == "f") {
				mujerescasadas++;
				edadcasadas = edadcasadas + edad
			}	
		break;
	} 
	//D
	if (edad > 60 && temperaturacorporal > 38) {
		mayorcontemperatura38++;
	}

		
	respuesta = confirm ("Desea continuar cargando?");
} while (respuesta == true);
//Fin de recoleccion de datos

//A
document.write("La nacionalidad de la persona que tiene mas temperatura es de "+nacionalidaddepersonacontemperatura + " y tiene "+ temperaturacorporalmasalta + " de temperatura corporal");
//B
document.write("<br>En este avion hay un total de "+ mayor17 +" mayores solteros");
//C
document.write("<br>Hay un total de " + mujeressolteras + " mujeres solteras y un total de "+ mujeresviudas + " mujeres viudas en este avion");
//D
document.write("<br>Hay un total de " + mayorcontemperatura38 + " personas de la tercerda edad con mas de 38 de temperatura")
//E
if (mujerescasadas == 0) {
	promedio = "No hay promedio que calcular"
} else {
	promedio = edadcasadas / mujerescasadas;
	promedio = parseInt(promedio);
}
document.write("<br>El promedio de edad entre todas las mujeres casadas de este avion es de "+ promedio)
}