// funcion 1


// function reservar(personas){
    
//     switch(personas){
//         case 1:
//         console.log("La carpas para esa ocupacion son las 1, 2, 3");
//         break;

//         case 2:
//         console.log("La carpas para esa ocupacion son las 4, 5, 6");
//         break;

//         case 3:
//         console.log("disponible solo la cabaña familiar para esa cantidad de personas");
//         break;

//         default:
//             console.log("no hay locaciones disponibles");
            

//     }
// }

// reservar(parseInt(prompt("ingrese la opcion correcta\n1)dos personas\n2)cuatro personas\n3)seis personas")))


//funcion 2

// const cotizar = personas=>{
    
//      let carpa2p = 10000,
//      carpa4p = 15000,
//      cabana6p = 20000;

//      if(personas == 2){
//          return carpa2p + carpa2p*0.21;

//      }else if( personas == 4){
//          return carpa4p + carpa4p*0.21;

//      }else if(personas == 6){
//          return cabana6p + cabana6p*0.21
    
//      } else{
//          return "no hay cotizacion disponible"
//      }

//  }

//  let cotizacion = cotizar(parseInt(prompt("ingrese si son 2, 4 o 6 ocupantes")))

//  console.log(`el total mas IVA de la locacion es ${cotizacion}`)


// funcion 3



// function disponibilidad (personas){

//     let hayLugar = personas > 0 && personas < 7 ? true : false;

//     if(hayLugar == true){
//         return "SI estan disponibles"

//     }else if(hayLugar == false){
//         return " NO estan disponibles"

//     }else{
//         return "no existe"
//     }
// }

// let disponible = disponibilidad(parseInt(prompt("ingrese la cantidad de ocupantes")));

// alert(`las cabañas con esa cantidad de ocupantes ${disponible}`)
