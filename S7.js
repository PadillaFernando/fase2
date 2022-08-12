// Programacion imperativa


// const numbers = [1, 2, 3, 4, 5]
// const doubles = []

// for(var i = 0; i < numbers.length; i++) {
//   doubles.push(numbers[i] * 2)
// }

// console.log(numbers) // [1, 2, 3, 4, 5]
// console.log(doubles) // [2, 4, 6, 8, 10]

// Programacion funcional 

// const numbers = [1, 2, 3, 4, 5]
// const doubles = numbers.map(function(number){
//     return number * 2;
// })
// // funcion tipo map
// console.log(numbers) // [1, 2, 3, 4, 5]
// console.log(doubles) // [2, 4, 6, 8, 10]

// Ejemplo de pq es importante hacer las variables inmutables

// const car = {
//     brand: 'Nissan',
//     model: 'Sentra',
//     year: 2020
// }


// function addColor(car){
//     // object asign
//     // const newCar = Object.assign({},car,{
//     // car.color = 'Black'});

//     // spread operator
//     const newCar = {
//         ...car,
//         color: 'Black'
//     }
//     return newCar;
// }
// console.log('Antes ',car)
// const sameCar = ddColor(car);

// console.log('Despues',sameCar)
// console.log('Despues solor car',car)

// FUNCIONES PURAS (EL VALOR SIEMPRE REGRESAN LO MISMO(NO PRODUCE SIDEDEFECTS))

// function add(a,b){
//     return a + b;
// }

// function randomNumber(){
//     return Math.floor(Math.random() * 10);

// }

// console.log(add(1,2)) // funcion pura
// console.log(randomNumber()) // funcion no pura porque no siempre regresa lo mismo

// Ejemplo

// let cart = [
//     {
//         item: 'Laptop',
//         quantity: 1

//     }
// ]
// Asi si se modifica cart y no es pura
// function addItemToCart(item, quantity){
//     cart.push({
//         item,
//         quantity
//     })
// }

// function addItemToCart(cart,item, quantity){
//     const newCart = cart.map(function(element){
//         return element
//     })
//     newCart.push({
//         item,
//         quantity
//     })
//     return newCart;
// }

// cart = addItemToCart(cart,'Telefono',2)
// cart = addItemToCart(cart,'Tablet',4)

// console.log(cart)

//FUNCIONES DE PRIMERA CLASE
// EXPRESIONES DE FUNCION
// Lo puedes utilizar como variable o como funcion como tal

// let square = function(number){
//     return number * number;
// }

// var squarOfFour = square(4)

// console.log(squarOfFour)

// FUNCION DE ALTO ORDEN (HIGH ORDER COMPONENTS)
// const numbers = [1, 2, 3, 4, 5]
// const doubles = numbers.map(function(number){
//     return number * 2;
// })

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// // funcion reduce
// const sum = numbers.reduce(function(acumulador,valorActual){
//     return acumulador + valorActual;
// },0)

// console.log(numbers) // [1, 2, 3, 4, 5]
// console.log(doubles) // [2, 4, 6, 8, 10
// console.log(evenNumbers)//[2,4]
// console.log(sum)

// EJEMPLO
// Input: 12345
// Output: 12345

// const num = 12345;
// // const str = num.toString();

// // console.log(num)
// // console.log(str)

// // // metodo split
// // const array = str.split('');
// // console.log(array)

// // encadenamiento de funciones

// const array = num.toString().split('');
// console.log(array)

// // const arrayOfNum = array.map(function(num){
// //     return Number(num);
// // })
// const arrayOfNum = array.map(Number);
// console.log(arrayOfNum)
// const sum = arrayOfNum.reduce(function(a,b){
//     return a + b;
// },0)
// console.log(sum)

// // la funcion de todos los digitos 

// function sumDigits(number){
//     return number
//         .toString()
//         .split('')
//         .map(Number)
//         .reduce(function(a,b){
//             return a + b;
//         },0)
// }

// console.log('suma de digitos con programacion funcional',sumDigits(num))

//RETO 1

// Desarrollo
// Crear una función flatten que recibe un arreglo de arreglos y
// retorna un nuevo arreglo con todos los elementos del arreglo original.



// const arrays = [[1, 2, 3], [4, 5], [6]];

// function flatten(arrays) {
//         return arrays.reduce(function(arrayFlaten,elem){
//             return arrayFlaten.concat(elem)
//         },[])
//   }

// const array = flatten(arrays);

// console.log(array); // [1, 2, 3, 4, 5, 6]


//reto 2
//Crear una función compact que recibe un arreglo y retorna un nuevo arreglo sin incluir los valores que sean falsy.

// function compact(array) {
//     return array.filter(Boolean)
//     return array.filter(item => !!item)
// }

// const array = [0, 1, false, 2, '', 3];
// const compactedArray = compact(array);

// console.log(compactedArray); // [1, 2, 3]

// reto 3 funcion de alto orden
// Crear una función de alto orden loop que será similar a un for.

// Recibe tres argumentos: start, una función test, una función update y una función body.

// El ciclo empieza en start y termina cuando test retorne false.
// En cada iteración se ejecuta la función body dándole como argumento el valor actual de start actual.
// Al final de cada ciclo se ejecuta la función update.

function loop(start, test, update, body) {
        // while(test(start)){
        //     body(start)
        //     start = update(start)
        // }
        for (let index = start; test(index); index = update(index)) {
            body(index)     
        }
}

const test = function(n) {
  return n > 0;
}

const update = function(n) {
  return n - 1;
}

loop(3, test, update, console.log);
// 3
// 2
// 1



