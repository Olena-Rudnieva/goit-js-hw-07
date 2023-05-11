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
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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
  let bigImageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${bigImageSrc}">
`);
  instance.show();
}

galleryEl.addEventListener('click', onGalleryClick);

// console.log(galleryItems);
