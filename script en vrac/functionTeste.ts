function ajouter(a: number, b: number): number {
  return a + b;
}

function saluer(nom: string, titre?: string): string {
  if (titre) {
    return `Bonjour ${titre} ${nom} !`;
  } else {
    return `Bonjour ${nom} !`;
  }
}

let message1 = saluer("Alice"); // "Bonjour Alice !"
let message2 = saluer("Bob", "Dr."); // "Bonjour Dr. Bob !"

//function flechée

const additionFleche = (a: number, b: number): number => a + b;


//function anonyme 

let nombres = [1, 2, 3];
let carrés = nombres.map(function (num: number): number {
    return num * num;
});

// Avec une fonction fléchée
let carrésFlèche = nombres.map(num => num * num);



///Paramètres par défaut
// Les paramètres par défaut permettent de donner une valeur par défaut à un paramètre si aucune valeur n'est fournie lors de l'appel de la fonction :
function multiplier(a: number, b: number = 1): number {
    return a * b;
}

let result1 = multiplier(5); // 5 * 1 = 5
let result2 = multiplier(5, 2); // 5 * 2 = 10



//rest parametre

function somme(...nombres: number[]): number {
    return nombres.reduce((acc, cur) => acc + cur, 0);
}

let total = somme(1, 2, 3, 4); // 10
