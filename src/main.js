import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import simpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { requestImages } from './js/pixabay-api';
import { imagesTemplate } from './js/render-functions';

const refs = {
  queryForm: document.querySelector('[data-image-query]'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};
const optionsLightBox = {
  close: false,
  showCounter: false,
  captionDelay: 250,
  captionsData: 'alt',
  scrollZoom: 'false',
  scrollZoomFactor: 'false',
  disableScroll: 'true',
};
const galleryLightBox = new simpleLightBox('.gallery a', optionsLightBox);

refs.queryForm.addEventListener('submit', event => {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  const queryText = event.target.elements.query.value.trim();
  if (!queryText) {
    iziToast.warning({
      message: 'Query field is empty. Please enter your query!',
      position: 'center',
    });
    return;
  }
  refs.loader.classList.remove('hidden');
  requestImages(queryText)
    .then(response => {
      if (response.data.hits.length) {
        refs.loader.classList.add('hidden');
        refs.gallery.innerHTML = imagesTemplate(response.data.hits);
        galleryLightBox.refresh();
      } else {
        refs.loader.classList.add('hidden');
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
      }
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        iziToast.error({
          message: `${error.response.data}`,
          position: 'center',
        });
        iziToast.error({
          message: `${error.response.status}`,
          position: 'center',
        });
        iziToast.error({
          message: `${error.response.headers}`,
          position: 'center',
        });
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser
        //  and an instance of http.ClientRequest in node.js
        iziToast.error({
          message: `${error.request}`,
          position: 'center',
        });
      } else {
        // Something happened in setting up the request
        // that triggered an Error
        iziToast.error({
          message: `Error: ${error.message}`,
          position: 'center',
        });
      }
      iziToast.error({
        message: `${error.config}`,
        position: 'center',
      });
    });
});
