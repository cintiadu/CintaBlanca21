// input
let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let n3 = document.getElementById("n3")
let n4 = document.getElementById("n4")
let n5 = document.getElementById("n5")
let n6 = document.getElementById("n6")
let boton = document.getElementById("boton")
let resu = document.getElementById("resu")

// let array = []

// boton.addEventListener ("click", () => {

//     let array = [
//         n1.value,
//         n2.value,
//         n3.value,
//         n4.value,
//         n5.value,
//         n6.value,
//     ]
    
//     console.log(array);
    
//     //output: La multiplicación del número adyacente
//     let resultado = []

//     for (let i = 0; i < array.length-1; i++) {
//         resultado.push(array[i]*array[i+1])
    
        
//     }

//     let mayor = 0

//     for (let i = 0; i < resultado.length; i++) {
        

//         if (mayor<resultado[i]) {
//             mayor = resultado[i]
//         }
        
        
//     }

//     //Muestra el Resultado
//     console.log(mayor);

//     resu.innerHTML = resultado + "<br>" + " el mayor es " + mayor
    

// })


const multi = (n1,n2) =>{
    return n1*n2
}

boton.addEventListener("click", () =>{

    resu.innerHTML = multi(n1.value,n2.value)

    
})