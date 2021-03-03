
function mostrar(){
    
    let nombreProducto;
    let tipoProducto;
    let precio;
    let cantidad;
    let categoria;
    let fabricante;

    let acumAlcohol = 0;
    let acumIac = 0;
	let acumQuat = 0;
	let contAlcohol = 0;
	let contIac = 0;
	let contQuat = 0;
    let cantPromedioAlcohol = 0;
    let cantPromedioIac = 0;
    let cantPromedioQuat= 0;
    let cantProductosTotal = 0;

    let acumDesinfectante = 0;
    let acumBactericida = 0;
    let acumDetergente = 0;
    let maxCategoria;

    let acumDetergentePrecio = 0;

    let flag = 1;
    let maxPrecioCategoria = 0;
    let maxFabricante;
	


	for (let i = 0; i < 5; i ++){
	
		nombreProducto = prompt("Ingrese nombre de producto").toLowerCase();
        tipoProducto = prompt("Ingrese tipo de producto: ALCOHOL/IAC/QUAT").toLowerCase();
        while (tipoProducto != "alcohol" && tipoProducto != "iac" && tipoProducto != "quat"){
            tipoProducto = prompt("Error. Ingrese tipo de producto: ALCOHOL/IAC/QUAT").toLowerCase();
		}
		precio = parseInt(prompt("Ingrese el precio del producto de 100 a 300"));
        while (isNaN (precio) || precio < 100 || precio > 300){
			precio = parseInt(prompt("Precio invalido. Ingrese el precio del producto de 100 a 300"));
		}
		cantidad = parseInt(prompt("ingrese la cantidad del producto de 1 a 1000"));
		while (isNaN (cantidad) || cantidad < 1 || cantidad > 1000){
			cantidad = parseInt(prompt("Error. Ingrese la cantidad de producto de 1 a 1000"));
		}
		categoria = prompt("Ingrese tipo de categoria: desinfectante/bactericida/detergente").toLowerCase();
        while (categoria != "desinfectante" && categoria != "bactericida" && categoria != "detergente"){
            categoria = prompt("Error. Ingrese tipo de categoria: desinfectante/bactericida/detergente").toLowerCase();
		}
		fabricante = prompt("Ingrese la marca del producto").toLowerCase();
	
		//A vamos contando la cantidad de cada tipo, pera despues sacar los promedios
        if (tipoProducto == "alcohol"){
			acumAlcohol += cantidad;
			contAlcohol ++;
			
        }
        else if (tipoProducto == "iac"){
            acumIac += cantidad;
            contIac ++;
		}
		else{
			acumQuat += cantidad;
			contQuat ++;
        }
		//B vamos acumulando la cantidad de productos de cada categoria para despues calcular cual tiene mas
        if (categoria == "desinfectante"){
            acumDesinfectante += cantidad;
		}
		else if (categoria == "detergente"){
			acumDetergente += cantidad;
			if (precio <= 200){
                acumDetergentePrecio += cantidad;      //C cantidad de detergente de precio menor a 200
            }	
        }
        else{
            acumBactericida += cantidad;
		}
		//D
        if (flag || precio > maxPrecioCategoria){
            maxFabricante = fabricante;
            maxCategoria = tipoProducto;
		}
		
		cantProductosTotal += cantidad; //A
		
		
	
	}
	//A
	cantPromedioAlcohol = acumAlcohol * 100 / contAlcohol;
    cantPromedioIac = acumIac * 100 / contIac;
	cantPromedioQuat = acumQuat * 100 / contQuat;

	//B la categoria  que tiene mas cantidad de productos
	if (acumDesinfectante > acumDetergente && acumDesinfectante > acumBactericida){
		maxCategoria = "Desinfectante";
	}
	else if (acumDetergente >= acumDesinfectante && acumDetergente > acumBactericida){
		maxCategoria = "Detergente";
	}
	else{
		maxCategoria = "Bactericida";
	}

	
	console.log("A- El promedio de cantidad por tipo de producto es: alcohol " + cantPromedioAlcohol + "%, Iac " + cantPromedioIac + "%, Quad " + cantPromedioQuat + "%");
    console.log("B- La categoria con más cantidad de unidades en total de la compra es " + maxCategoria);
    console.log("C- Las unidades de IAC con precios menos a 200 (inclusive) se compraron en total son " + acumDetergentePrecio);
    console.log("D- La marca y tipo del más caro de los productos es: Marca: " + maxFabricante + " y Tipo: " + maxCategoria);


}
