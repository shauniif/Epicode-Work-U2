let shopBook = []
const rowCart = document.getElementById('shopBook');
let generateCard = function(arrayOfBooks) {
    const rowForCard = document.getElementById('row-for-books');
    arrayOfBooks.forEach((book) => {
        const colBook = document.createElement('div')
        colBook.classList.add('col')
        colBook.innerHTML = `<div class="card">
        <img src="${book.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title mt-2">${book.title}</h5>
        <p class="card-text">Price: ${book.price}€</p>
        <button type="button" class="btn btn-warning text-light" onclick="removeBook(event)">Scarta</button>  
        <button type="button" class="btn btn-danger" onclick="addBook(event)">Compra ora</button>
        </div>
        </div>`
        rowForCard.append(colBook);
        
    })
}
let removeBook = function(e) {
    let removedBood = e.target.closest('.card').remove()
    console.log(removedBood)
}

let addBook = function (e) {
    let colwithTitle = document.createElement('li');
    let title =  e.target.closest('.card').querySelector('.card-title').innerText
    colwithTitle.innerText = title;
    let elementOfshopBook = colwithTitle.innerText;
    shopBook.push(elementOfshopBook);
    console.log(shopBook);
    localStorage.setItem("shopBook", JSON.stringify(shopBook))
    console.log('corretto');
    rowCart.appendChild(colwithTitle)
}
const getBooks = function() {
    fetch('https://striveschool-api.herokuapp.com/books', {

    })
    .then((response) => {
        if(response.ok) {
            console.log('andato', response)
            return response.json()
        } else {
            switch(response.status) {
                case 400:
                    throw new Error('La risorsa richiesta non è stata trovata');
                case 404:
                    throw new Error('Risorsa non trovata');
                case 418:
                    throw new Error('La risorsa richiesta non è stata trovata');
                default:
                    throw new Error('Errore non gestito')
            }
        }
    })
    .then((arrayOfBooks) => {
        console.log('ecco il mio array di libri', arrayOfBooks)
        generateCard(arrayOfBooks);
        localStorage.setItem('allBooks', JSON.stringify(arrayOfBooks));
    })
    .catch((err) => {
        console.log('ERROR', err)
    })
}
const shopBookLocalStorage = JSON.parse(localStorage.getItem('shopBook'))
console.log(shopBookLocalStorage)
if(shopBookLocalStorage) {
    shopBook = shopBookLocalStorage;
    shopBook.forEach((book) => {
        let colwithTitle = document.createElement('li');
        colwithTitle.innerHTML = book;
        rowCart.appendChild(colwithTitle);
    })
}
getBooks();