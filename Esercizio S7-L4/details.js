const imageId = new URLSearchParams(location.search).get('imageId')
console.log(imageId);

 let generateImg = function(obj) {
    let imgtoSee = document.getElementsByClassName('img-card')[0];
    let namePhotographer = document.getElementsByClassName('jumbotron-heading')[0];
    let jumbotronBG = document.getElementsByClassName('jumbotron')[0]
    let urlPhotgrapher = document.getElementsByClassName('text-decoration-none')[0]
    imgtoSee.setAttribute('src', obj.src.medium)
    namePhotographer.innerHTML = obj.photographer
    jumbotronBG.style.background = obj.avg_color 
    urlPhotgrapher.setAttribute('href', obj.photographer_url)
    urlPhotgrapher.innerText = obj.photographer_url;

}




fetch('https://api.pexels.com/v1/photos/' + imageId, {
  headers: {
    Authorization: "s2e0eHr7a2UmNOM5ClRw2lnkEy4c6PnG2DEVOQWYXGdKVM9UWcrde60y",
  },
})
  .then((response) => {
    console.log('RESPONSE PEXELS', response)
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('pexels rip')
    }
  })
  .then((obj) => {
    console.log(obj)
    generateImg(obj)
  })
  .catch((err) => {
    console.log('errore', err)
  })
