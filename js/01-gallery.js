import { galleryItems } from './gallery-items.js';
// Change code below this line

// const galleryEl = document.querySelector('.gallery');

// const galleryItem = document.createElement('li');
// const galleryLink = document.createElement('a');
// const galleryImg = document.createElement('img');
// galleryImg.classList.add('gallery__image');
// galleryLink.append(galleryImg);
// galleryItem.append(galleryLink);
// galleryEl.append(galleryItem);

// console.log(galleryEl);

// galleryEl.addEventListener('click', onGalleryElClick);

// function onGalleryElClick(event) {
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

//   console.log(event.target);
// }

console.log(createGalleryItemMarkup(galleryItems));

function createGalleryItemMarkup(items) {
  const markup = items.map(({ preview, original, description }) => {
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
  });
  console.log(markup[0]);
}

// console.log(galleryItems);
