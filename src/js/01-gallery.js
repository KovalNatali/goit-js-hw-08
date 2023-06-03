
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');

const markup = galleryItems.map((item) => `<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>` ).join('');
galleryContainer.insertAdjacentHTML('beforeend', markup);
galleryContainer.addEventListener('click', onClick);

function onClick(event){
    event.preventDefault()
    if(event.target.nodeName !== "IMG"){
        return;
    }
}

galleryContainer.addEventListener("keydown", onClickEscape);

function removeEventListenerEsc() {
    galleryContainer.removeEventListener("keydown", onClickEscape);
}
function onClickEscape(event) {
    if(event.code === "Escape") {
        instance.close();
        removeEventListenerEsc();
   
    }
}

let lightBox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
 
  console.log(galleryItems);

