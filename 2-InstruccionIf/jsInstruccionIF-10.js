function mostrar()
{
	let notamax = 10;
	let notamin = 1;
	
	let nota = Math.random()*(notamax - notamin)+ notamin;
	nota = parseInt(nota);

	if (nota > 8) {
		alert("Excelente");
		
	}
		else  { 
			if (nota > 4) {
			alert("Aprobo");
				}
				else {

				alert("Vamos, la proxima se puede");
			
					}

	}
	
	

}