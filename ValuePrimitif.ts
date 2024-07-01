//TYPE PRIMITIF

let age2: number = 42 //number
let name2: string = "Alice"; //string

let isstudent: boolean = true 


// any : Représente n'importe quel type. Utilisé pour désactiver le contrôle de type.
let anything:any = 42;
anything = "hello"




//unknown : Représente un type inconnu, plus sûr que any car nécessite une vérification avant utilisation.

let noSure: unknown=4;

if (typeof noSure === 'number') {
    console.log(noSure.toFixed(2))
}

//void : Utilisé pour représenter l'absence de type de retour dans une fonction.
function logMessage(message: string): void {
    console.log(message);
  }
  


//null et undefined : Représente les valeurs null et undefined

let nothing: null = null;
let undef: undefined = undefined;


//array en ts 
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["one", "two", "three"];



//tuple 
let person: [string, number] = ["Alice", 30];



//enum represente un emseble de valeurs nommées.

enum Color {
  Red,
  Green,
  Blue
}
let color: Color = Color.Green;
