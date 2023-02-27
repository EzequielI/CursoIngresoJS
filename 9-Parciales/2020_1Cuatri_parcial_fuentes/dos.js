function mostrar()
{
  let arena;
  let cal;
  let cemento;
  let material;
  let cantidad = 0;
  let precio = 0;
  let descuento = 0;
  let preciocondescuento = 0;
  let cantidadarena = 0;
  let precioarena = 0;
  let materialanterior;
  let preciocal = 0;
  let cantidadcal = 0;
  let preciocemento = 0;
  let cantidadcemento = 0;
  let cantidadmayor = 0;
  let cantidadtotal = 0;
  let preciototal = 0;
  let preciomayor = 0;
  do {
    //Tipo de material 
    material = prompt("Bienvenido ingrese que material desea comprar(arena, cal o cemento)");
      while (material != "arena" && material != "cal" && material != "cemento") {
       material = prompt("Porfavor ingrese un material valido");
       }
     // Cantidad de bolsas
      do{
        cantidad = prompt("Ingrese una cantidad de bolsas");
        cantidad = parseInt(cantidad);
       }while(isNaN(cantidad))

       //Precio
      do{
        precio = prompt("Ingrese el valor por unidad");
        precio = parseInt(precio);
      }while(isNaN(precio) && precio >= 0)

      switch (material) {
        case "arena":
        precioarena = precio + precioarena;
        cantidadarena = cantidad + cantidadarena;
        break;
        case "cal":
        preciocal = precio + preciocal;
        cantidadcal = cantidad + cantidadcal;
        break;
        case "cemento":
        preciocemento = precio + preciocemento;
        cantidadcemento = precio + cantidadcemento;
        break;
      }
    respuesta = confirm("Desea continuar?");
  } while (respuesta == true);
  //Precio
  //Termina la recoleccion de datos
  precioarena = precioarena * cantidadarena;
  preciocal = preciocal * cantidadcal;
  preciocemento = preciocemento * cantidadcemento;
  preciototal = precioarena + preciocal + preciocemento;
  //Cantidad y calcular descuento
  cantidadtotal = cantidadarena + cantidadcal + cantidadcemento;
  if (cantidadtotal <= 10) {
    descuento = 0.15;
  } else { 
    if (cantidadtotal >= 30) {
    descuento = 0.25;
  } else{
    descuento = 0;
  }
  } 
  preciocondescuento = preciototal * descuento;
  preciocondescuento = preciototal - preciocondescuento;
  //A
  document.write ("El precio a pagar sin descuento seria "+ preciototal)
  //B
  document.write("<br>El precio final a pagar sera de " + preciocondescuento);
  //D
  if (cantidadarena > cantidadcal && cantidadarena > cantidadcemento) {
    cantidadmayor = "Arena";
  }else {
    if (cantidadcal > cantidadcemento) {
      cantidadmayor = "Cal";
    } else {
     cantidadmayor = "Cemento";
    }
  }
  document.write ("<br>Se compro mayor cantidad de bolsas de "+ cantidadmayor)
  //F
  if (precioarena > preciocal && precioarena > preciocemento) {
    preciomayor = "Arena";
  }else {
    if (preciocal > preciocemento) {
      preciomayor = "Cal";
    } else {
      preciomayor = "Cemento";
    }
  }
  document.write("<br> Y el tipo mas caro fue "+ preciomayor)
} 