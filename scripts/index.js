use "strict";

const searchInput = document.querySelector('input.#search');
if(searchInput){
    searchInput.addEventListener('keypress', (e) =>{
        console.log("keypressed: ");
    })
}