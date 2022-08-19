// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector('div.gallery');

const galleryImgs = galleryItems => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></div>`;
    })
    .join('');
};

const photos = galleryImgs(galleryItems);
gallery.insertAdjacentHTML('beforeend', photos);

let gallerySimpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});
gallerySimpleLightbox.on('show.simplelightbox', function () {
  gallerySimpleLightbox.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      close.simplelightbox;
    }
  });
});
