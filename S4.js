// function myFunction(a,b) {
//     suma =a + b
//     return suma
// }

// console.log( myFunction(1,7)); 

// function calculateAge(birthYear) {
//     const age = 2022 - birthYear;
//     return age;
// }
// const ageFer = calculateAge(1995);
// console.log('La edad es: ' , ageFer);
// console.log(calculateAge(1994)); 

// function yearUntilRetirement(birthYear2,name){
//     const age = calculateAge(birthYear2)
//     const retirement = 65 - age;
//         console.log(`${name} se retiera en ${retirement} años`);
    
// }

// yearUntilRetirement(1994,'Fer')

// function power(base, exponent){
//     let resultado = 1;
//     for(let i=0; i < exponent; i++){
//         resultado = resultado * base;
//     }
//     console.log('El resultado es:' , resultado)

// }


// power(2, 4)

// let whatDoYouDo = function(job, name){
//     switch (job){
//         case 'developer':
//             return name + ' develops cool apps.'
            
//         case 'designer':
//             return name + ' designs awesome websites.'
            

//         default:
//             return name + ' does somethings else.'
//     }
// }

// console.log(whatDoYouDo('developer','Fer'))
// console.log(whatDoYouDo('designer','Pepe'))

// let factorial = function fac(num){
//     return num < 2 ? 1 : num * fac(num-1); // deja de aplicarse en 0 
// }
// console.log(factorial(5))

// function logName(){
//     const name = 'Fer';
//     console.log(name)
// }
// logName()

// (function (){ // Se llama rapido esta funcion no esta definida
//     const name = 'Fer';
//     console.log(name)
// })
// ()

// arrow funtions

const firtNames = ['Fer', 'Luis', 'Juan'];

// function getFullNames(names){
//     const fullNames = [];
//     for (const name of names) {
//         fullNames.push(`${name} Padilla`)
//     }
//     return fullNames;
// }

// const fullNames = getFullNames(firtNames);
// console.log(fullNames)

// const getFullNames = (names)=> {
//     const fullNames = [];

//     for (const name of names) {
//         fullNames.push(`${name} Padilla`)
//     }
//     return fullNames;
// }

// const fullNames = getFullNames(firtNames);
// console.log(fullNames)

// const logName = name => console.log(`Hello ${name}`)

// logName('Fer');

//RETO 2 regresa el mayor de 2 que recibe
// function mayor(a,b){
//     if (a>b) {
//         return a
//     } else {
//         return b
        
//     }
// }
// console.log(mayor(8,10))
// // con Arrow function 
// const getLargerInt = (num1,num2) => console.log(`El mayor es: ${num1 > num2 ? num1 : num2}`)
// getLargerInt(9,10)

// con Arrow function 
// const getLargerInt = (num) => console.log(`El mayor es: ${num[0] > num[1] ? num[0] : num[1]}`)
// getLargerInt(9,10)

// RETO 2 regresa el mayor de un array
// function mayor(a){
//     let aux=0;
//     for(let i=0; i<a.length; i++){
//         if(aux < a[i]){
//             aux = a[i];
//         }
//     }
//     return aux
// }
// console.log(mayor([4,6,3,7,2,7,9]))










//RETO 3 numeros de fibonacci

function fibonacci(num){
    if (num<2) {
        return num
        
    } else {
        return ((fibonacci(num-1))+(fibonacci(num-2)))
    }
    
}

function serieFibonacci(num){
    for (let i=0; i<num; i++){
        console.log(fibonacci(i))
    }
}
serieFibonacci(7);





