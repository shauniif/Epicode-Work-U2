let firstBtn = document.getElementsByClassName('btn-primary')[0];
let secondBtn = document.getElementsByClassName('btn-secondary')[0];


let changeImg = function(arr) {
let arrImg = document.getElementsByClassName('card-img-top');

let arrImgArr = Array.from(arrImg)

arrImgArr.forEach((imgCard, i) => {
    imgCard.setAttribute('src', arr[i].src.small)
    imgCard.addEventListener('click', function(){
        location.assign('details.html?imageId='+ arr[i].id)
    })
});
};

let modalFillImg = function(e) {
    let modalImg = document.querySelector('.modal-body img'); 
    let imgSrcforModal = e.target.closest('.card').querySelector('img').src;
    modalImg.setAttribute('src', imgSrcforModal)
    console.log('prendo immagine', imgSrcforModal)
}
let submitEvent = function(query) {
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
            "Content-type": "application/json",
            Authorization: "s2e0eHr7a2UmNOM5ClRw2lnkEy4c6PnG2DEVOQWYXGdKVM9UWcrde60y"
        }
    })
    .then((response) => {
        if(response.ok) {
            console.log('Spero di esserci riuscita', response)
            return response.json()
        } else {
            throw new Error('non va qualcosa')
        }
    })
    .then((allobj) => {
        console.log('array', allobj.photos) 
        changeImg(allobj.photos);
        changeText(allobj.photos)
    })
    .catch((err) => {
        console.log('ERRORE', err)
    })
}


let changeBtnText = document.getElementsByClassName('btn-outline-secondary');
let changeBtnTextArr = Array.from(changeBtnText)
changeBtnTextArr.forEach(btn => {
    if (btn.innerText === 'Edit') {
        btn.innerText = 'Hide'
        btn.addEventListener('click', function(e) {
            e.target.closest('.col-md-4').classList.add('d-none')
        })
    } else {
        btn.addEventListener('click', modalFillImg)
        btn.setAttribute('data-bs-toggle', "modal")
        btn.setAttribute('data-bs-target',"#modalView")
    }

});

let changeText = function(arr) {
    let nineMins = document.querySelectorAll('small.text-muted')
    console.log(nineMins)
    nineMins.forEach((stext, i) => {
        stext.innerHTML = arr[i].id
    })
}


submitEvent('sea')
firstBtn.addEventListener('click', function() {
    submitEvent('lake')
} )
secondBtn.addEventListener('click', function() {
    submitEvent('space')
} )

const searchInput = document.getElementById('search-img')
const searchButton = document.getElementById('search-btn')

searchButton.addEventListener('click', function() {
    submitEvent(searchInput.value)
}) 

