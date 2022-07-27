/* const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];

// contant doubled = [2,6,8,14,4,2,18,0]

const doubled = [];
const doubled2 = [];

for (var i=0; i<numbers.length; i++){
    doubled[i] = 2 * numbers[i]; // Con el metodo normal
    //doubled2.push(numbers[i]*2); // Con el metodo push que agregra lo que esta dentro del parentesis
                                 // al final del arreglo
}

for (const index of numbers){ // for each 
    if (index === 1 || index === 7 ) continue
    doubled2.push(index * 2);
}

console.log(doubled);
console.log(doubled2);

// Calcular el promedio de numbers  
// let numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
let prom, sum = 0;
for (const index of numbers){ // for 
    
    sum = sum + index;
}
prom = sum / numbers.length;
console.log('promedio ' + prom); */

//OBJETOS
/* 
 const john = {
    fistName : 'John',
    lastName : 'Doe',
    birthYear : 1990
 }
 john.fistName = 'Jane'; // Reasignames el nombre 
 console.log(john.fistName , john.lastName , john.birthYear);
 */

 // Ejemplo convirtiendo un objeto en array

 /* const car = {
    brand: 'Volkswagen',
    model: 'Jetta',
    year: '2021'
 }

 // Queremos hacerlos array 
// [brand','Volkswagen'],['model','jetta'],['year','2021']

const keys = Object.keys(car); // ['bran','model','year']
const pairs = []

for (let i=0; i<keys.length; i++){
    pairs.push([keys[i],car[keys[i]]])
}
console.log(pairs)



// Reto convertir un array a un objeto
// const auto = {
//  brand: 'Volkswagen',
// model: 'Jetta',
//   yaer: '2021'
//}

const auto = {

}

for (let i=0; i<pairs.length; i++){
    auto[pairs[i][0]] = pairs[i][1];
    
}

console.log(auto);
 */

// const colors = ['red','blue','green']
// const myColors = [...colors] //Spread operator vuelve a los valores independientes, sino solo lo tomaria como un apuntador

// console.log(colors)
// console.log('my colors ', myColors)
// colors[1]='pink' // sino lo hubieramos spread operator se cambiaria en ambos
// console.log(colors)
// console.log('my colors ', myColors)

// const auto = {
//     brand: 'Volkswagen',
//     model: 'Jetta',
//     yaer: '2021'
// }

// const automovil = {
//     ...auto

// }

// automovil = [...auto]

// console.log(auto)
// console.log(automovil)


// const primeros = [1,2,3]
// const segundos = [4,5,6]
// const todos= [...primeros, ...segundos]
// console.log(todos)



// const auto = {
//     brand: 'Volkswagen',
//     model: 'Jetta',
//     yaer: '2021'
// }

// const concesionaria = {
//     vendedor: 'Jose',
//     oficina: 'Perisur'
// }

// const resultado = {
//     ...auto,
//     ...concesionaria
// }

const colors = ['red','blue','green']
const [Rojo, Azul, Verde] = colors;

console.log(Rojo)
console.log(Azul)
console.log(Verde)

const person = {
    firstName: 'Luis',
    lastName: 'Padilla',
    birthYear: 1994,
    job: {
        type :'Developer',
        yearsWorking : 4
    },
    socialMedia : {
        facebok : 'Fernando Padilla',
        instagram : 'Padillaf17'
    }
}

//const firstName = person.firstName; // Hacemos una variable llamada firstName con la propiedad del objeto

//const {firstName,lastName} = person; //object destructuring (Hacemos variables apartir de un objeto xqe es mas util)

// console.log(firstName)
// console.log(lastName);

const {firstName: nombre, lastName: apellido} = person; // Objetct destructurin con cambio de nombre en la variable
console.log(nombre)
console.log(apellido)

const working = person.job.yearsWorking;

const {
    socialMedia:{
        facebok: fb, instagram: ig}
} = person;

console.log('Fb',ig ,'ig' ,fb)





// Reto 




