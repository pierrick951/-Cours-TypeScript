// Superset
// Un superset est un langage qui étend les fonctionnalités d'un autre langage.
// TypeScript est une surcouche de JavaScript qui apporte des nouveautés comme le typage.

// Strict Null Checking
// Le strict null checking est une option de TypeScript (strictNullChecks dans tsconfig.json) 
// qui oblige à gérer explicitement les valeurs null et undefined.

// Type Inference
// Le type inference est la capacité de TypeScript à déduire le type d'une variable à partir de la valeur assignée.
let message: string = "Hello, World!"; // TypeScript déduit que 'message' est de type 'string'

// Caster en TypeScript
// Deux manières de caster (convertir) des types :
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;

let someOtherValue: any = 'this is another string';
let anotherStrLength: number = (<string>someOtherValue).length;

// Classe Abstraite
// Une classe abstraite ne peut pas être instanciée directement.
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

// Type Générique
// Un type générique permet de créer des composants réutilisables qui fonctionnent avec différents types.
function identity<T>(arg: T): T {
  return arg;
}

let output: string = identity<string>("Hello"); // 'output' est de type 'string'
let outputt: number = identity<number>(5); // 'outputt' est de type 'number'

// Private vs. Protected
// - private : Accessible uniquement au sein de la classe.
// - protected : Accessible au sein de la classe et des classes dérivées.
class Base {
  private privateMember: string = "private";
  protected protectedMember: string = "protected";
}

class Derived extends Base {
  showProtected() {
    console.log(this.protectedMember); // OK
  }
  // showPrivate() {
  //   console.log(this.privateMember); // Erreur
  // }
}

// Créer un Iterable
// Pour créer un iterable, une classe doit implémenter la méthode [Symbol.iterator].
class MyIterable {
  private items: number[] = [1, 2, 3];

  [Symbol.iterator](): Iterator<number> {
    let index = 0;
    let items = this.items;

    return {
      next(): IteratorResult<number> {
        if (index < items.length) {
          return { value: items[index++], done: false };
        } else {
          return { value: null, done: true };
        }
      }
    };
  }
}

let iterable = new MyIterable();
for (let value of iterable) {
  console.log(value); // 1, 2, 3
}

// Factory / Abstract Factory
// Factory : Un design pattern pour créer des objets sans spécifier la classe exacte.
// Abstract Factory : Un design pattern pour créer des familles d'objets liés ou dépendants sans spécifier leurs classes concrètes.
class Car {
  drive() {
    console.log("Driving a car");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }
}

class VehicleFactory {
  static createVehicle(type: string) {
    switch (type) {
      case "car":
        return new Car();
      case "truck":
        return new Truck();
      default:
        throw new Error("Unknown vehicle type");
    }
  }
}

let myCar = VehicleFactory.createVehicle("car");
myCar.drive(); // Driving a car

// Surcharger une Fonction
// La surcharge de fonction permet de définir plusieurs signatures pour une même fonction.
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

let result1 = add(1, 2); // 3
let result2 = add("Hello, ", "World!"); // "Hello, World!"

// Utilisation de React.FC
// Avec React.FC
// const MyComponent: React.FC = ({ children }) => {
//   return <div>{children}</div>;
// };

// Sans React.FC
// interface MyComponentProps {
//   children: React.ReactNode;
// }

// const MyComponent = ({ children }: MyComponentProps) => {
//   return <div>{children}</div>;
// };

// Union Discriminée
// Permet de gérer différents types dans une union.
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function area(shape: Shape) {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
  }
}

// Utilisation
const square: Square = { kind: "square", size: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 4, height: 6 };

console.log(area(square)); // 25
console.log(area(rectangle)); // 24
