import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const fotos = galleryItems.map((foto) => 
`<a class="gallery__item" href="${foto.original}">
  <img class="gallery__image" 
    src="${foto.preview}" 
    alt="${foto.description}"
    title="${foto.description}" />
</a>`).join(" ");
gallery.innerHTML = fotos;
new SimpleLightbox(".gallery a", { captionDelay: 250 });

