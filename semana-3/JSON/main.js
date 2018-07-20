// let objeto = { 
// 	nombre : "angelo", 
// 	edad :27, 
// 	sensei : true, 
// 	batch [4, 8, 9 , 21]
// 	musica {
// 		favoritos ["muse", "pate de fua"],
// 		meh [ "mon laferte", "heroes del silencio", "31 minutos"]

// 	},
// 	direccion : {
// 		calle: "agustin melgar"
// 		numInt : 44
// 		colonia : "condesa"
// 	}



// let musica = document.getElementById ("musica");
// 	musica.innerHTML = alumno.musica.meh

// for (let i = 0, i < alumno.musica.meh.legth; i++);{
// 	console.log ( alumno.musica.meh [i]);


// 	console.log ( alumno.nombre, alumno.edad)

// }

let nombre = document.getElementById ("nombre");
let genero = document.getElementById ("genero");
let edad = document.getElementById ("edad");
let lugar = document.getElementById ("lugar");
let botonsito = document.getElementById ("botonsito");

let DatosAlumno = {
	nombre : "",
	genero : "",
	edad : "",
	profesion : "",
	lugar : "",
}

console.log (DatosAlumno);



botonsito.addEventListener ("click", () => {
	event.preventDefault ()
	
	DatosAlumno.nombre = nombre.value;
	DatosAlumno.genero = genero.value;
	DatosAlumno.edad = edad.value;
	DatosAlumno.lugar = lugar.value;

console.log (DatosAlumno.value):

})








