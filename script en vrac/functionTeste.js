"use strict";
function ajouter(a, b) {
    return a + b;
}
function saluer(nom, titre) {
    if (titre) {
        return `Bonjour ${titre} ${nom} !`;
    }
    else {
        return `Bonjour ${nom} !`;
    }
}
let message1 = saluer("Alice"); // "Bonjour Alice !"
let message2 = saluer("Bob", "Dr."); // "Bonjour Dr. Bob !"
//function flechée
const additionFleche = (a, b) => a + b;
//function anonyme 
let nombres = [1, 2, 3];
let carrés = nombres.map(function (num) {
    return num * num;
});
// Avec une fonction fléchée
let carrésFlèche = nombres.map(num => num * num);
///Paramètres par défaut
// Les paramètres par défaut permettent de donner une valeur par défaut à un paramètre si aucune valeur n'est fournie lors de l'appel de la fonction :
function multiplier(a, b = 1) {
    return a * b;
}
let result1 = multiplier(5); // 5 * 1 = 5
let result2 = multiplier(5, 2); // 5 * 2 = 10
//rest parametre
function somme(...nombres) {
    return nombres.reduce((acc, cur) => acc + cur, 0);
}
let total = somme(1, 2, 3, 4); // 10
