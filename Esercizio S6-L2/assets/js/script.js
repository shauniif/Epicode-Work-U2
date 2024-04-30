const allCard = document.querySelectorAll('.card');

window.onload = function() {
    const countsTraverl = function() {
    alert(`Ci sono ${allCard.length} in totale`);
}
countsTraverl();
  // 1) trova tutte le card welcome summer       
  const allTheWelcomeSummerCards = document.getElementsByClassName('summer');
    console.log(allTheWelcomeSummerCards);
  // 2) per ognuna delle card...      
   for (let i = 0; i < allTheWelcomeSummerCards.length; i++) {
    // assegno ad ogni card trovata position-relative         
    allTheWelcomeSummerCards[i].classList.add('position-relative');         
    // ...genero un badge di bootstrap         
    // <span class="badge text-bg-danger">HOT</span>         
    // genero uno span vuoto         
    const hotBadge = document.createElement('span'); 
    // <span></span>         
    // assegno le classi CSS         
    hotBadge.classList.add('badge','text-bg-danger','position-absolute','top-0','end-0'); 
    // <span class="badge text-bg-danger position-absolute top-0 end-100"></span>         
    // inserisco al suo interno la parola "HOT"         
    hotBadge.innerText = 'HOT' //manca da appendere il badge alla card di turno         
    allTheWelcomeSummerCards[i].appendChild(hotBadge);
   }

   const removeAll = function(){
        for(let i = 0; i < allCard.length; i ++ ) {
            const scard = allCard[i];
            scard.remove();
        }
   }
   //removeAll();
}
