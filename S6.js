// constructor de obejetos

// const john = {
//     name: 'John',
//     birthYear: 1995,
//     job: 'Developer'

// }

// const Person = function(name, birthYear, job){
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;

// }

// const jane = new Person('Jane','1995','Designer');
// // const john = new Person('John',1995,'Developer');
// const mark = new Person('mark',1996,'Supervisor');

// console.log(jane)
// console.log(mark)
// console.log(john)

// VECTORES
// const Vec = function(x,y){
//     this.x = x;
//     this.y = y;
// }

// const vec1 = new Vec(1,2);
// const vec2 = new Vec(3,5);

// console.log(vec1)
// console.log(vec2)

// // vec3 = vec1 + vec2 (x1+x2,y1+y2)



// Vec.prototype.plus = function(other){
//     return new Vec(this.x + other.x,  this.y + other.y)
// }

// Vec.prototype.minus = function(other){
//     return new Vec(this.x - other.x,  this.y - other.y)
// }

// Vec.prototype.length = function(){
//     return Math.sqrt(this.x *this.x + this.y * this.y)
// }

// console.log('plus',vec1.plus(vec2))
// console.log('minus',vec1.minus(vec2))
// console.log('Length',vec1.length())

// HERENCIA


// const Person = function(name, birthYear){
//     this.name = name;
//     this.birthYear = birthYear;
// }

// const Developer = function(name, birthYear, skills, yearsOfExperience){
//     Person.call(this, name, birthYear)
//     this.skills = skills;
//     this.yearsOfExperience = yearsOfExperience;

// }
// const john = new Developer('John', 1996, 'JS', 5, )

// console.log(john)


// Ejemplo herencia 
// const Group = function() {
//     this.members = [];
//   }
// // herencia a grupo
//   const grupo = new Group();

// //   Funcion has
// Group.prototype.has = function(value){
//     return this.members.includes(value);
// }

// Group.prototype.add = function(value){
//     if(!this.has(value)){
//         this.members.push(value)
//     }
// }

// Group.form = function(array){
//     let group = new Group();
//     for(let i=0; i<array.length; i++){
//         group.add(array[i])
//     }
//     return group
// }

// let listaDeElementos = [1,2,3,4,5]
// let group = Group.form(listaDeElementos)
  
// //   const group = Group.from([1, 2, 3, 4, 5]);
// //   console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
// //   console.log(group.has(5)); // true
// //   console.log(group.has(10)); // false
  
// //   group.add(10);
// //   console.log(group.has(10)); // true
// console.log(group); // true

//

// const Person =function(name,birthYear,job){
//     this.name =name;
//     this.birthYear= birthYear;
//     this.job = job;

// }

// Person.prototype.calculateAge = function () {
//     const today = new Date();
//     const year = today.getFullYear()

//     console.log(year - this.birthYear)
// }

// const john = new Person('John',1995,'Developer')
// const Luis = new Person('Luis',1994,'Designer')
// const Mark = new Person('Mark',1997,'Teacher')

// john.calculateAge();

// console.log(john)
// console.log(Luis)
// console.log(Mark)

// CLASES 
// const Person =function(name,birthYear,job){
//     this.name =name;
//     this.birthYear= birthYear;
//     this.job = job;   
// }

class Person {
    constructor(name,birthYear,job){
        this.name =name;
        this.birthYear= birthYear;
        this.job = job;
    }

    calculateAge(){
        const today = new Date();
        const year = today.getFullYear()

        console.log(year - this.birthYear)
    }
}

const john = new Person('John',1995,'Developer')
const Luis = new Person('Luis',1994,'Designer')
const Mark = new Person('Mark',1997,'Teacher')

john.calculateAge();

console.log(john)
console.log(Luis)
console.log(Mark)