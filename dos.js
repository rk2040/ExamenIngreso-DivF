function mostrar()
{
  let nombre;
  let situacionLaboral;
  let cantMaterias;
  let sexo;
  let notaPromedio;
  let edad;
  let respuesta;

  let flagPromedio = 1;
  let mejorPromedio = 0;

  let flagEdad = 1;
  let maxEdad;
  let nombreMaxEdad;
  let contMaxEstudia = 0;

  let acumNotaBusca = 0;
  let acumNotaTrabaja = 0;
  let acumNotaEstudia = 0;
  let contBusca = 0;
  let contTrabaja = 0;
  let contEstudia = 0;

  let flagMaterias = 1;
  let minMaterias = 8;
  let edadMinMaterias;
  let nombreMinMaterias;
  let totalPromedioNotaBusca = 0;
  let totalPromedioNotaTrabaja = 0;
  let totalPromedioNotaEstudia = 0;
  let contMinBusca = 0;



  do{
    nombre = prompt("Ingrese su nombre").toLowerCase();

    situacionLaboral = prompt("Ingrese su situacion laboral: buscando/trabajando/solo estudiante").toLowerCase();
    while (situacionLaboral != "buscando" && situacionLaboral != "trabajando" && situacionLaboral != "solo estudiante"){
      situacionLaboral = prompt("Error. Ingrese su situacion laboral: buscando/trabajando/solo estudiante").toLowerCase();
    }
    cantMaterias = parseInt(prompt("Ingrese la cantidad me materias que cursa: 0 a 8"));
    while (isNaN(cantMaterias) || cantMaterias <= 0 || cantMaterias >= 7){
        cantMaterias = parseInt(prompt("Error. Ingrese la cantidad me materias que cursa"));
    }
    sexo = prompt("Ingrese su genero: femenino/masculino/nobinario").toLowerCase();
      while (sexo != "femenino" && sexo != "masculino" && sexo != "nobinario"){
          sexo = prompt("Error. Ingrese su genero: femenino/masculino/nobinario").toLowerCase();
      }
    notaPromedio = parseFloat(prompt("Ingrese su nota: 1 a 10"));
      while (isNaN(notaPromedio) || notaPromedio < 1 || notaPromedio > 10){
          notaPromedio = parseFloat(prompt("Nota invalida. Ingrese su nota: 1 a 10"));
      }
    edad = parseInt(prompt("Ingrese su edad: 18 o mas"));
      while (isNaN(edad) || edad < 18){
          edad = parseInt(prompt("Edad invalida. Ingrese su edad"));
      }
      //---------------------Los ingresos terminan aca-------------------

    //A mejor promedio de los que NO trabajan o estan buscando
    if (flagPromedio || (notaPromedio > mejorPromedio && sexo == "solo estudiante")){
      mejorPromedio = notaPromedio;
      flagPromedio = 0;
    }
    //B el nombre mas viejo entre los solo estudiante
    if (flagEdad || situacionLaboral == "solo estudiante"){
      maxEdad = edad;
      nombreMaxEdad = nombre;
      contMaxEstudia ++;
      flagEdad = 0;
    }
    //C acumulamos para despues sacar promedios
    if (situacionLaboral == "buscando"){
      acumNotaBusca += notaPromedio;
      contBusca ++;
    }
    else if (situacionLaboral == "trabajando"){
        acumNotaTrabaja += notaPromedio;
        contTrabaja ++;
    }
    else{
      acumNotaEstudia += notaPromedio;
        contEstudia ++;
    }
    //D
    if (flagMaterias || (cantMaterias < minMaterias && situacionLaboral == "buscando")){
      minMaterias = cantMaterias;
      edadMinMaterias = edad;
      nombreMinMaterias = nombre;
      contMinBusca ++;
      flag = 0;
    }

  
    respuesta = prompt("Desea ingresar otro alumno? s/n").toLowerCase();
  }while (respuesta == 's');
    
  totalPromedioNotaBusca = (acumNotaBusca / contBusca).toFixed(2);
  totalPromedioNotaTrabaja = (acumNotaTrabaja / contTrabaja).toFixed(2);
  totalPromedioNotaEstudia = (acumNotaEstudia / contEstudia).toFixed(2);

  if (mejorPromedio != 0){
    console.log("a- El mejor promedio de los que no trabajan ni buscan trabajo es: " + mejorPromedio);
  }
  else{
    console.log("a- No hay alumnos que no trabajen ni busquen trabajo para promediar")
  }
  if (contMaxEstudia != 0){
    console.log("b- El nombre del mas viejo de los alumnos solo estudiante es: " + nombreMaxEdad);
  }
  else{
      console.log("b- No hay ningun alumno solo estudiante");
  }
  console.log("c- El promedio de nota por situacion laboral es. Buscando: " + totalPromedioNotaBusca + ", Trabajando: " + totalPromedioNotaTrabaja + ", Solo estudiante: " + totalPromedioNotaEstudia);

  if (contMinBusca != 0){
  console.log("d- La edad y nombre del que cursa menos materias y que este buscando trabajo. Nombre: " + nombreMinMaterias + " edad; " + edadMinMaterias );
  }
  else{
    console.log("d- No hay alumnos que esten buscando trabajo")
  }

}
