/* interface et type avancées*/

// Définition et utilisation des interfaces :
// Les interfaces en TypeScript permettent de définir la structure d'un objet. Elles peuvent être utilisées pour vérifier que les objets respectent une certaine forme.

interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // propriété optionnelle
}

const user1: User = {
  name: "Alice",
  age: 25,
};

const user2: User = {
  name: "Bob",
  age: 42,
  isAdmin: true,
};

// la difference entre les type et interface

// les interface peuvent etre etendus (exetends) ce qui permet decrée de nouvelles interface bassée sur des interfaces existantes .

// les type peuvent utiliser des operateur e type avancés comme les union et les intersections (&)

// exemple pour  les type
type Point = {
  x: number;
  y: number;
};

// type Shape = Point & {
//     radius?: number; // Propriété optionnelle
// };

// const circle: Shape = {
//     x: 0,
//     y: 0,
//     radius: 10
// };

// Etendre une interface
interface Anumal {
  nameDog: string;
}

interface Dog extends Animal {
  breed: string;
}

// const myDog: Dog = {
//     nameDog:"Rex",
//     breed: 'Labrador'
// }

// les classes
class Person {
  name: string;
  age: number;

   constructor(name: string, age:number ){
    this.name = name;
    this.age = age
  }

  greet(){
    return `Hello, my name is ${this.name} and i have ${this.age} years old.`
  }
}

const person1 = new Person('Alice',25);

// avec les modificateur

// public : Accessible depuis n'importe où.
// private : Accessible uniquement au sein de la classe.
// protected : Accessible au sein de la classe et des sous-classes.

// class Vehicle {
//     protected speed: number;

//     constructor(speed: number) {
//         this.speed = speed;
//     }

//     public move() {
//         console.log(`Moving at speed: ${this.speed}`);
//     }
// }

// class Car extends Vehicle {
//     private brand: string;

//     constructor(speed: number, brand: string) {
//         super(speed);
//         this.brand = brand;
//     }

//     public showBrand() {
//         console.log(`This car is a ${this.brand}`);
//     }
// }

// const myCar = new Car(120, "Toyota");
// myCar.move(); // Moving at speed: 120
// myCar.showBrand(); // This car is a Toyota



//Héritage et polymorphisme
// L'héritage permet de créer une classe basée sur une autre classe. Le polymorphisme permet d'utiliser des objets de différentes classes de manière interchangeable.

class Animalfoo {
    move(){
        console.log("Moving..")
    }
}

class Beaver extends Animalfoo{
    move(){
        console.log("crick...")
    }
}

class PolarBear extends Animalfoo{
    move(){
        console.log("swimming...")
    }
}

const animals: Animalfoo[] = [new Beaver(), new PolarBear()];


animals.forEach(animal => {
    animal.move()
});


//Generiques

// Les génériques permettent de créer des composants réutilisables qui fonctionnent avec différents types.

function identity<T>(arg:T): T {
    return arg
}

console.log(identity<string>("hello"))

// Fonctions et classes génériques :

// Les fonctions et classes génériques permettent de définir des types variables qui seront spécifiés au moment de l'utilisation.

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;

    constructor(zeroValue: T, add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
console.log(myGenericNumber.add(1, 2)); // 3



// Contraintes génériques :
// Les contraintes génériques permettent de restreindre les types qui peuvent être utilisés avec un générique.
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
    console.log(arg.length);
}

logLength("Hello"); // 5
logLength([1, 2, 3]); // 3
// logLength(42); // Erreur : number n'a pas de propriété length

