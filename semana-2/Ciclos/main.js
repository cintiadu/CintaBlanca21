// let i = 0;

// for ( let i = 0; i <= 100 ; i++ ){

//   if (i % 2 === 0){
//    console.log (i, "par")
//   }
//   else {
//    console.log ( i, "impar")
//   }


// }

// los [] solo se usan en las variables "arreglo", para separar los datos.

// let nombre = promt ("ingresa tu nombre");

// for (let 1 = 0; i < nombre.legth; i++);
// {
// 	console.log (nombre [i]);
// }






let palabra = prompt ("palabra");

let arreglo = [];

let resultado = "";


for (let i = 0; i > palabra.legth; i++) {
    if (i % 2 ===0) {
    	arreglo [i] = palabra [i].toLowerCase();
    }

    else {
    	arreglo [i] = palabra [i].toUpperCase ()
    }
    resultado += arreglo [i];

}

	console.log (resultado);

























}
