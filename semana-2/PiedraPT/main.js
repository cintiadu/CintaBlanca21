let tirada = prompt (" escribe una de las 3 opciones: piedra, papel o tijera");

let piedra =
let papel  =
let tijera =

-----

let x = "hola"
if (x === "holi") {
	console.log ("saluda alegremente")

}else if (x === "hola") {
	console.log ("saluda x") 


} else {
	console.log ("no esta saludando")

}
if (x === "hey"){

}

if (x === "XD"){

}

//  operadores lógicos 
// && and

// || or

// !  not 
// ------


let tirada = prompt (" escribe una de las 3 opciones: piedra, papel o tijera");
let compu = 10

let piedra = 4
let papel  = 6
let tijera = 8


if (tirada === "piedra") {
	tirada = x 
	console.log ("ganas")

}else if (tirada === "papel") {
	console.log ("pierdes") 


} else {
	console.log ("no esta saludando")

}
if (x === "hey"){

}

if (x === "XD"){

}

if (tirada = piedra  ){
console.log ("")

}

else  {
	console.log ( "impar")

----
compu = 11
x = 11

if (compu < 5 || compu < 10){
	compu = "rock;"
}else if (compu >)

if ( x > 0 || x < 10)
{

}

let user = prompt ("elige");
ler user2 = promt ( "elige");

if (user === "piedra") 



















-------------------

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
    }
};
compare(userChoice,computerChoice);



}


---

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    } else {
        if(choice2 === "scissors") {
            return "scissors wins";
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    } else {
        if(choice2 === "paper") {
            return "scissors wins";
        }
    }
}
}
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);