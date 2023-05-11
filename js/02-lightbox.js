import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItemMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`;
    })
    .join('');
}

function onGalleryClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  event.preventDefault();
  console.log(event.target);
  
}

const lightbox = new SimpleLightbox('.gallery a', {
    
//   captionsData: 'test',
//   captionPosition: 'bottom',
//   captionDelay: 250
});

galleryEl.addEventListener('click', onGalleryClick);

// console.log(galleryItems);
