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
// let arrayCopy = agesArr1.slice(0) // ref XYZW

// JSON.stringify()
// JSON.parse()

console.log( JSON.stringify(agesArr1) )
console.log( JSON.parse( "[40, 100, 1000, 2000]" ) )


let arrayCopy = JSON.parse(  JSON.stringify(agesArr1)  )

arrayCopy.pop()
arrayCopy.push("patata")

console.log(arrayCopy)
console.log(agesArr1)


