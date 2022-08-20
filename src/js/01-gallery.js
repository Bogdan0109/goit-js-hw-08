import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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
