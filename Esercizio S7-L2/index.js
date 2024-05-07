
// ESERCIZIO 1 VAR
const nameSaved = document.getElementById('textfield');
const divforName = document.getElementById('nameSaved');
const buttonSave = document.getElementsByClassName('btn-warning')[0];
const buttonDelete = document.getElementsByClassName('btn-danger')[0];

// ESERCIZIO 2
let second = 0;

// ESERCIZIO 1
let createName = function() {
    localStorage.setItem('nameSaved', nameSaved.value);
    divforName.innerText = nameSaved.value
    nameSaved.value = '';
}
let  deleteName = function() {
    localStorage.removeItem('nameSaved');
    divforName.innerText = ''
}
buttonSave.addEventListener('click', createName);
buttonDelete.addEventListener('click', deleteName);

const nameFromLocalStorage = localStorage.getItem('nameSaved');

if(nameFromLocalStorage) {
    divforName.innerText = nameFromLocalStorage;
}

if (sessionStorage.getItem("second")) {
    second = parseInt(sessionStorage.getItem("second"));
} else {
    second = 0;
}

let incrementCounter = function() {
    second++;
    sessionStorage.setItem("second", second);
};

setInterval(incrementCounter, 1000);