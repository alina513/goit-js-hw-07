import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(({preview, original, description}) =>
{return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img
    class="gallery__image"src="${preview}"data-source="${original}"alt="${description}"
    /></a></li>`})
    .join("");
console.dir(markup)
gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", onClick);
function onClick(event) {
    event.preventDefault();
    if(!event.target.classList.contains("gallery__image"))
    {return;}
    
    const data = event.target.dataset.source;
    const currentItem = galleryItems.find(({original}) => 
         original === data
         );
         const instance = basicLightbox.create(`<div class="modal">
         <img class="gallery__image" src="${currentItem.original}" alt="${currentItem.description}"
/></div>`);
console.log(instance)
instance.show();
    
};
