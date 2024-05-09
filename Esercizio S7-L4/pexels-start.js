let btnStart = document.getElementById('first-btn')
let btnStart2 = document.getElementById('second-btn')
let site = `https://api.pexels.com/v1/search?query=lake`
let nMeth = 'GET'

let unpackAllTheArray = function(arrayofImg) {
    let newArrayofImg = [...arrayofImg.photos]
    console.log(newArrayofImg)
    generateimg(newArrayofImg)

}
let generateimg = function(imgArr) {
    let albumImg = document.getElementById('row-album');
    albumImg.innerHTML = '';
    imgArr.forEach((img) => {
    const newCol = document.createElement('div')
    newCol.classList.add('col-md-4')
    newCol.innerHTML = `<div class="card">
    <img src="${img.src.original}" class="card-img-top" alt="img">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <div>
      <button class="btn btn-warning">Hide</button>
      <button class="btn btn-danger">Close</button>
      </div>
    </div>
  </div>`
  console.log('ciao')
  albumImg.appendChild(newCol);
    }); 
};


let submitEvent = function() {
    fetch(site, {
        method: nMeth,
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
    .then((allobj) =>{
        console.log('array', allobj) 
        unpackAllTheArray(allobj) 
    })
    .catch((err) => {
        console.log('ERRORE', err)
    })
}



btnStart.addEventListener('click', function() {
    submitEvent()
    
} )