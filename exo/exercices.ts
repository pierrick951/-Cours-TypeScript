const numberExo: number = 42;
const exoString: string = 'hello Typescript'

function foo(a:number, b:number){
    return(a+b)
}


let tabexo: number[] = [1,2,3];
let tupleExo:[string,number,number] = ['hello',1,525 ]//probleme avec ce tuple


enum Dog {
    Labrador,
    Shiba,
    Dalmatian
}

let dog: Dog = Dog.Shiba; // Utilise la majuscule pour 'Shiba'
