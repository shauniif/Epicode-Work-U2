// ESERCIZIO 1
class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location =  _location
    }

    compareAge(secondUser) {
        if(this.age > secondUser.age) {
            return `${this.firstName} è più vecchio di ${secondUser.firstName}`
        } else if(this.age < secondUser.age) {
            return `${this.firstName} è più giovane di ${secondUser.firstName}`
        } else {
            return `${this.firstName} è ha la stessa età di ${secondUser.firstName}`
        }
    }
};

const x = new User('Mario', 'Rossi', '19', 'Roma')
console.log(x);
const y = new User('Giuseppe', 'Verdi', '23', 'Milano')
console.log(y);

console.log(x.compareAge(y));


// ESERCIZIO 2

const nameAnimal = document.getElementById('nameAnimal');
const nameOwner = document.getElementById('nameOwner');
const speciesAnimal = document.getElementById('spiecesAnimal');
const breedAnimal = document.getElementById('breedAnimal');
const submitForm = document.getElementsByTagName('form')[0];
class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName;
        this.spieces = _species;
        this.breed = _breed
    }
    sameOwner(secondUser) {
        this.ownerName === secondUser.ownerName
        console.log(sameOwner());
    };
    
}
animalInf = []

uploadAnimalInformation = function() {
    const animalDateUl = document.getElementById('animalsdateul');

    animalDateUl.innerHTML = '';

    animalInf.forEach(animal => {
        const newLi = document.createElement('li');
        newLi.innerHTML = `
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">${animal.petName}</h5>
            <h5 class="card-title">${animal.ownerName}</h5>
            <h5 class="card-title">${animal.spieces}</h5>
            <h5 class="card-title">${animal.breed}</h5>
        </div>`
animalDateUl.appendChild(newLi); // prima va l'elemento padre poi l'elemento figlio
    });
}
submitForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const dateFromForm = new Pet(nameAnimal.value, nameOwner.value, speciesAnimal.value, breedAnimal.value)

    console.log(dateFromForm);
    animalInf.push(dateFromForm);
    console.log(animalInf);

    nameAnimal.value = '';
    nameOwner.value = ''; 
    speciesAnimal.value = ''; 
    breedAnimal.value = '';


   uploadAnimalInformation();
});