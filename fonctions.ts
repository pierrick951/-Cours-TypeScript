//fonction avec typage de parametre de retour 

//Spécifier les types des paramètres et du type de retour d'une fonction.

function add(a:number, b:number):number {
    return a + b 
}

add(1,2)


//les fonction anonymes et flechees

// fonction anonymes

let multiply = function (x: number, y:number): number {
    return x * y 
}

multiply(10,20)


//fonction flechées

let divide = (x:number, y:number):number => x / y

//Paramètres optionnels et valeurs par défaut :

function greet(name: string, greeting?: string): string {
    if (greeting) {
      return `${greeting}, ${name}`;
    } else {
      return `Hello, ${name}`;
    }
  }

function groot(name:string,greeting:string = "hello"): string {
    return `${greeting}, ${name}`;
}


  