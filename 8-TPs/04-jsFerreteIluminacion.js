/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let lampara;
    let preciofinal;
    let lamparasuma;
    let marca;
    let descuento;
    let ingresosbrutos;

    marca = document.getElementById("Marca").value ;
    
    lampara = parseInt(lampara);

    lampara = document.getElementById("txtIdCantidad").value ;

    lamparasuma = lampara * 35;
 //A
  if (lampara >= 6) {
    descuento = 0.50;
    
    } else { if (lampara <= 6) {
    descuento = 0;
  }//B
    if (lampara == 5 && marca == "ArgentinaLuz") {
        descuento = 0.40;
    } else { if (lampara == 5 && marca != "ArgentinaLuz") {
        descuento = 0.30;
    }}
        //C
        if (lampara == 4 && marca == "ArgentinaLuz") {
            descuento = 0.25;
        } else { if (lampara == 4 && marca == "FelipeLamparas") {
            descuento = 0.25;
        }
            if (lampara == 4 && marca != "ArgentinaLuz" && marca != "FelipeLamparas") {
                descuento = 0.20;
            }} 
            //D
           		 if (lampara == 3 && marca == "ArgentinaLuz") {
                descuento = 0.15;

           		 } else { if (lampara == 3 && marca == "FelipeLamparas") {
				descuento = 0.10;
			}else { if (lampara == 3 && marca != "ArgentinaLuz" && marca != "FelipeLamparas") {
				descuento = 0.05;
			} } 
                
            }
                
            

		
		
		
    }
  



















          
    preciofinal = lamparasuma * descuento;
    preciofinal = lamparasuma - preciofinal;
	if (preciofinal >= 120) {
		ingresosbrutos = 0.10;
		ingresosbrutos = lamparasuma * ingresosbrutos;
		alert("IIBB Usted pago "+ ingresosbrutos+ " de impuestos")
	}
	

     

      document.getElementById("txtIdprecioDescuento").value = preciofinal





}
