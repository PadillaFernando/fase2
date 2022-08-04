// Var es una variable global por eso si la podemos usar fuera de la funcion
// if(true){
//     var foo = 'Fer'
//     console.log(foo)
// }

// console.log(foo)

// Numbers y doubles como globales, pero i no porque es local
// var numbers = [1,2,3,4,5]
// var doubles = []

// for (let i=0; i<numbers.length; i++){
//     doubles.push(numbers[i] *2)

// }
// console.log(numbers)
// console.log(doubles)
// console.log(i)

// (function prueba (){
//     var foo = "HOLA"
//     console.log (foo);
//   })();
  
//   console.log (foo);
  
// console.log(this)


// reto 1
// var singers = [
//     { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//     { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//     { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//     { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
//   ];
  
//   function pluck(list, propertyName) {
//     let resultado = []
//     for(let i=0; i<list.length; i++){
//         resultado.push(list[i][propertyName])
//     }
//         return resultado
//   }
  
//   console.log( pluck(singers, 'name') );
//   // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
//   console.log( pluck(singers, 'band') );
//   // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
//   console.log( pluck(singers, 'born') );
//   // [1948, 1950, 1967, 1964]

// reto2
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"
// for(let i=0; i<createPhoneNumber.length; i++){
//     if (i==2) {

//     }
//     if (condition) {
           
//     }
//     if (condition) {
           
//     }
        
    
// }

// Escribir una función que reciba un arreglo de n cantidad de enteros
// positivos que pueden no estar ordenados. La función debe retornar 
// un nuevo arreglo con los elementos faltantes del primer arreglo.
findMissingNumbers = [2, 1, 9, 5, 7, 3, 10]; // [4, 6, 8]
let aux=0

findMissingNumbers.sort()


console.log(findMissingNumbers)