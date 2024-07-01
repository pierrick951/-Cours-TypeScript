// **Déclare une énumération FuelType pour représenter les types de carburant : Essence, Diesel, Électrique.**

// **Déclare une interface Vehicle avec les propriétés brand, model, year, et fuelType (utilise l'énumération FuelType). Ajoute une méthode start qui retourne une chaîne de caractères indiquant que le véhicule a démarré.

//** */ Crée une classe Car qui implémente l'interface Vehicle. Ajoute une propriété supplémentaire numberOfDoors (nombre de portes) et implémente la méthode start. Ajoute une méthode openTrunk qui retourne une chaîne de caractères indiquant que le coffre est ouvert. Utilise les modificateurs d'accès appropriés pour les propriétés.

//** */ Crée une classe Truck qui implémente l'interface Vehicle. Ajoute une propriété supplémentaire cargoCapacity (capacité de chargement en tonnes) et implémente la méthode start. Ajoute une méthode loadCargo qui accepte un nombre représentant la charge en tonnes et retourne une chaîne de caractères indiquant que la charge a été chargée. Utilise les modificateurs d'accès appropriés pour les propriétés.

// Crée une classe générique Garage<T extends Vehicle> qui peut stocker et gérer un ensemble de véhicules. Ajoute des méthodes pour ajouter un véhicule, retirer un véhicule, et lister tous les véhicules.

// Crée une instance de Garage pour les voitures et une autre pour les camions. Ajoute plusieurs voitures et camions aux garages respectifs et affiche les informations sur les véhicules stockés.

// Bonus : Utilise une contrainte générique pour que la méthode addVehicle de la classe Garage accepte uniquement les objets qui implémentent l'interface Vehicle.

enum FuelType {
  Essence,
  Diesel,
  Electrique,
}

interface Vehicule {
  brand: string;
  model: string;
  year: number;
  fueltype: FuelType;
  start(): void;
}

interface Cars extends Vehicule {
  numberOfDoors: number;
  openTrunk(): void;
}
class CarsImplementation implements Vehicule {
  brand: string;
  model: string;
  year: number;
  fueltype: FuelType;
  numberOfDoors: number;

  constructor(
    brand: string,
    model: string,
    year: number,
    fueltype: FuelType,
    numberOfDoors: number
  ) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.fueltype = fueltype;
    this.numberOfDoors = numberOfDoors;
  }

  start(): void {
    console.log("la voiture a bien demarrer");
  }

  openTrunk(): void {
    console.log("le coffre est ouvert");
  }
}

interface Truck extends Vehicule {
  cargoCapacity: number;
  loadCargo(tonnes: number): string;
}
class Trucky implements Vehicule {
  brand: string;
  model: string;
  year: number;
  fueltype: FuelType;
  cargoCapacity: number;

  constructor(
    brand: string,
    model: string,
    year: number,
    fueltype: FuelType,
    cargoCapacity: number
  ) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.fueltype = fueltype;
    this.cargoCapacity = cargoCapacity;
  }

  start(): void {
    console.log("Le camion a démarré");
  }

  loadCargo(tonnes: number): string {
    return `La charge de ${tonnes} tonnes a été chargée.`;
  }
}


class Garage<T extends Vehicule> {
  private vehicles: T[] = [];

  addVehicle(vehicle: T): void {
    this.vehicles.push(vehicle);
    console.log(`Ajouté ${vehicle.brand} ${vehicle.model} au garage.`);
  }

  removeVehicle(vehicle: T): void {
    const index = this.vehicles.indexOf(vehicle);

    if (index !== -1) {
      this.vehicles.splice(index, 1);
      console.log(`Retire ${vehicle.brand} ${vehicle.model} du garage.`);
    } else {
        console.log(`Le véhicule ${vehicle.brand} ${vehicle.model} n'est pas das le garage.`)
    }
  }


  listVehicle(): void {
    console.log('vehicle dans le garage:');
    this.vehicles.forEach((vehicle) => {
        console.log(`${vehicle.brand} ${vehicle.model} - Année : ${vehicle.year}`)
    });
  }
}


const carGarage = new Garage <Cars>();
const TrunkGarage = new Garage <Truck>();




const crenautlTruck = new Trucky("renault", "camion", 2001, FuelType.Electrique, 5);

const porsche = new CarsImplementation(
  "porshe",
  "carrera",
  2020,
  FuelType.Diesel,
  4
);

carGarage.addVehicle(porsche);
TrunkGarage.addVehicle(crenautlTruck);

