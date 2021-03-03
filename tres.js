function mostrar()
{
	let nombre;
	let obraSocial;
	let edad;
	let temperatura;
	let sexo;



	do{
		nombre = prompt("Ingrese su nombre").toLowerCase();
		obraSocial = prompt("Ingrese su obra social: PAMI/OSDE/otras").toLowerCase();
    while (obraSocial != "pami" &&obraSociall != "osde" && obraSocial != "otras"){
      obraSocial = prompt("Error. Ingrese su obra social: PAMI/OSDE/otras").toLowerCase();
    }


		respuesta = prompt("Desea ingresar otro pasajero? s/n").toLowerCase();
	}while (respuesta == 's');
	
}
// Perdon profe, llegue hasta donde pude ... 