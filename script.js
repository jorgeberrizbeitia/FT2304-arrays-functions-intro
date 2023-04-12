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
