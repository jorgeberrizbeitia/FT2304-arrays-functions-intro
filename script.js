console.log("Probando");


// ARRAYS

// [ multiples elementos separados por comas ]
// [ elemento1, elemento2, elemento3 ]

let myArr = [ 3455, "hola", true, undefined, null, {}, () => {}, ["patata", [ "banana"] ]]


console.log(myArr)


let cities = [ "Madrid", "Barcelona", "Valencia", "Cadiz", "Berlin", "Tokyo" ]


console.log( cities.length )

// print la primera ciudad
console.log( cities[0] )

// print de la ultima ciudad
// console.log( cities[5] )
console.log( cities[ cities.length - 1 ] )

// print de la primera letra de la primera ciudad
console.log( cities[0][0] )
console.log( cities[0].charAt(0) )

// let name = "Lorena";
// console.log( name[0] )

// print de la primera letra de la ultima palabra
console.log( cities[cities.length - 1][0] )

// print de la ultima letra de la ultima palabra
// console.log( cities[cities.length - 1][cities[cities.length - 1].length - 1] )

let lastCity = cities[cities.length - 1]
let lastCharLastCity = lastCity[lastCity.length - 1]
console.log(lastCharLastCity)



// indexOf

let indexOfValencia = cities.indexOf("Valencia")
console.log(indexOfValencia) // 2

let indexOfCaracas = cities.indexOf("Caracas")
console.log(indexOfCaracas) // -1 significa, no lo consigue

// includes

let includesTokyo = cities.includes("Tokyo")
console.log(includesTokyo) // true

let includesParis = cities.includes("Paris")
console.log(includesParis) // false

// let indexOfBerlin = cities.indexOf("Berlin")
// let indexOfI = cities[indexOfBerlin].indexOf("i")
// console.log(indexOfI)


// slice => hacer una copia de una sección

let firstTwoCities = cities.slice(0, 2) // el segundo no lo incluye
console.log(firstTwoCities)

// let fromThirdCity = cities.slice(3, cities.length)
let fromThirdCity = cities.slice(3)
console.log(fromThirdCity)


let lastTwoCities = cities.slice(-2)
console.log(lastTwoCities)

// let firstAndLastCity = [ cities.slice(0, 1)[0], cities.slice(-1)[0] ]
let firstAndLastCity = [ cities[0], cities[cities.length - 1] ]
console.log(firstAndLastCity)



// Mutabilidad


let someStr = "hola";

someStr[0] = "H";

console.log(someStr)

// los strings y otros tipo de data primitivos son inmutables

someStr = "Hola";


let friends = ["Ross", "Monica", "Phoebe", "Chandler", "Joey", "Rachel"]

friends[0] = "Mike"

console.log(friends);

// arrays y todos los objetos o tipos de data no primitivos son mutables.

console.log( friends.slice(0, 3) )
console.log("despues del slice", friends)

// no todos los metodos mutan el array original.


// Metodos que SI mutan el array

// remover elementos del array

// .pop() => remueve el ultimo

// friends.pop() // remover el ultimo

let removedElement = friends.pop() // remover el ultimo

console.log(removedElement)
// console.log( friends.pop() )
// friends.pop()

console.log("despues del pop", friends)


// .shift() => remueve el primero

let removedFirst = friends.shift()

console.log("despues del shift", friends)

// metodos para agregar elementos


// .push() => agrega al final

let amountOfElements = friends.push("Gunther"); // retorna la cantidad de elemento luego de agregar

console.log(amountOfElements)
console.log("despues del push", friends)

// .unshift() => agrega al inicio

let amountOfElements2 = friends.unshift("Janice"); // retorna la cantidad de elemento luego de agregar

console.log(amountOfElements2)
console.log("despues del unshift", friends)


// para agregar y remover dentro del array (no al inicio o al final) usamos el metodo:

// .splice()

let removedSomeElements = friends.splice(2, 2, "Emily") // esto remueve desde posición 2, 2 elementos

console.log("despues de splice", friends)
console.log(removedSomeElements)


// splice solo para agregar

// argumentos del splice:

// 1. posicion donde va a modificar
// 2. cantidad de elementos a remover. Si solo queremos agregar. valor 0.
// 3. elementos a agregar.
friends.splice(3, 0, "Robert", "Nona")
console.log("despues del segundo splice", friends)



// objectos declarados como const, podemos hacer modificaones sobre ellos.
const someNumbers = [ 44, 55, 100 ];

someNumbers.pop()
console.log(someNumbers)

// ...no podemos reemplazar todo el valor
// someNumbers = [1, 30, 50]


// forma curiosa de vaciar un array
someNumbers.length = 0;
console.log(someNumbers)


// LOOPS en Arrays


let numbers = [ 10, 55, 80, "hola", 44, 200, true, null ]


for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

let impostors = [];

for (let element of numbers) {
  // console.log(element)
  // console.log( typeof element )
  if (typeof element !== "number") {
    console.log("hemos encontrado al impostor, sus", element)
    impostors.push(element)
  }
}

// que pasa si quiero guardar los impostores en un array separado?
console.log("array de impostores", impostors)



// REFERENCIAS EN JS

let age1 = 42;
let age2 = 42;

console.log( age1 === age2);


let agesArr1 = [20, 24, 32]; // ref. 1234
let agesArr2 = [20, 24, 32]; // ref. abcd

console.log( agesArr1 === agesArr2 ); // se compara por referencia
//           ref. 1234 === ref. abcd  // false

console.log( agesArr1[0] === agesArr2[0] )

let agesArr3 = agesArr1; // asignando la misma referencia 1234 a agesArr3

console.log( agesArr1 === agesArr3 )


// agesArr3.pop() // ref 1234

// console.log( agesArr3 )
// console.log( agesArr1 )


// clonar array
// => forma 1
// let arrayCopy = agesArr1.slice(0) // ref XYZW

// JSON.stringify()
// JSON.parse()

console.log( JSON.stringify(agesArr1) ) // convierte un elemento de JS en un string (incluyendo todos los caracteres especiales)
console.log( JSON.parse( "[40, 100, 1000, 2000]" ) ) // convierte un string en eun elemento de JS, tomando en cuenta los caracteres especiales para crear arrays, objetos

// => forma 2
let arrayCopy = JSON.parse(  JSON.stringify(agesArr1)  )

arrayCopy.pop()
arrayCopy.push("patata")

console.log(arrayCopy)
console.log(agesArr1)



// Funciones

function nombreDeLaFuncion( /*  parametros opcionales */ ) {

  // el codigo que se ejecutará cada vez que llame, invoke, encienda la funcion.

  // si tenemos parametros, haremos uso de los parametros

  return /* algun valor */
  // opcionalmente, la funciona retornará un valor necesario fuera de la función.

}


// para invocarla, llamarla, encenderla...
nombreDeLaFuncion( /* argumentos opcionales que se relacionan con los parametros */ )


// ejemplo de funcion

function printName( name, number ) {
  // let name = "Jorge" // esto es lo que ocurre en JS detras de camaras

  // console.log("Hola Jorge")
  console.log( `hola ${name}. El numero es ${number}` )

  // console.log( `Hola ${name}`.repeat(number) )

}

printName( "Jorge", 5 )

// ....

printName( "Santi", 10 )
printName( "Lorena", 20 )
printName( "Cristina", 18 )
// printName( 4, "Javier")


// return


function addNumbers( num1, num2 ) {

  // let sum = num1 + num2
  // console.log(sum)

  return num1 + num2

  // la funcion SOLO puede retornar un valor
  
  // despues de que el return se ejecute, la funcion se detiene
  let algo = "patata"
  console.log(algo)

}

let result1 = addNumbers( 5, 18 ) // 23
let result2 = addNumbers( 100, 24 ) // 124

console.log( "fuera de la funcion: ", result1, result2 )


// ejemplo más complejo

const staffList = ["caro", "ruth", "clara"]

// console.log( `nuestro maravilloso staff esta comprendido por: ${staffList[0]}, ${staffList[1]} y ${staffList[2]} ` )

function capitalize( string ) {

  let capitalizedStr = string[0].toUpperCase() + string.slice(1)
  return capitalizedStr

  // en una sola linea
  // return string[0].toUpperCase() + string.slice(1)

}

let name1 = capitalize( staffList[0] );
let name2 = capitalize( staffList[1] );
let name3 = capitalize( staffList[2] );

console.log( `nuestro maravilloso staff esta comprendido por: ${name1}, ${name2} y ${name3} ` )

// sin usar variables name1, name2, name3
// console.log( `nuestro maravilloso staff esta comprendido por: ${capitalize( staffList[0] )}, ${capitalize( staffList[1])} y ${capitalize( staffList[2])} ` )


// Diferentes tipos de funciones


// funcion de declaración. ES5-. PRACTIQUEN ESTA.

function funcionDeDeclaracion(  ) {
  return "Esto es una función de declaración"
} 

// funcion de expresión. ES6+

// la menos usada de todas.
const funcionDeExpresion = function(  ) {
  return "Esto es una función de expresión"
}

// función de flecha. PRACTIQUEN ESTA.
const funcionDeFlecha = (  ) => {
  return "Esto es una función de flecha"
}


// función de flecha reducida
const funcionDeFlechaReducida = (  ) => "Esto es una función de flecha"




// Actividad guiada

// Crear una funcion sinEspacio que elimine todos los espacios vacios de un string.

// "ba na na ra    ma   "
// => "bananarama"

function sinEspacios( string ) {

  // clausula de guardia
  if ( typeof string !== "string" ) {
    // detener la funcion
    return "ERROORRRR El valor recibido no es el correcto, por favor usa solo strings"
  }


  let cleanString = "";

  for ( let character of string ) {

    // console.log(character)
    if ( character !== " " ) {
      // console.log(character)
      cleanString += character
    }

  }

  // console.log(cleanString)
  return cleanString;
}


// tests
console.log( sinEspacios( "ba na na ra    ma   " ) )
console.log( sinEspacios( "HO %// LAA  " ) )
console.log( sinEspacios( "" ) )
console.log( sinEspacios( 55 ) ) // test de un error



// Actividad 2 guiada

// crear una funcion que reciba:
// 1. recibe un unico vegetal
// 2. recibe un array de vegetales

// nos dice cuantas veces está el vegetal en el array

// "tomate"
// ["tomate", "lechuga", "zanahoria", "tomate", "patata", "tomate", "patata"] 
// el resultado deberia ser: 3

function findVeggie( searchVeggie, veggieArray ) {

  let counter = 0;

  for ( let i = 0; i < veggieArray.length; i++ ) {

    // console.log( veggieArray[i] )
    if (veggieArray[i] === searchVeggie) {
      // console.log("hay tomate")
      counter++
    }

  }

  // console.log(counter)
  if (counter === 0) {
    return `no hay ${searchVeggie} en el array`
  } else {
    return `hay ${counter} de ${searchVeggie} en el array`
  }

}

// test
let someArr = ["tomate", "lechuga", "zanahoria", "tomate", "patata", "tomate", "patata"] 

console.log( findVeggie( "banana", someArr ) )