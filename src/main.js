import { AxiosHeaders } from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function searchImages(imgsName) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';

  const params = new URLSearchParams({
    key: '48904751-5a5ebea07cb3b99a0a07eaa8f',
    q: imgsName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const options = {
    headers: { Accept: 'application/json' },
  };

  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
  });
}

// !==================================================ПРОСЛУХОВУВАЧ

const refs = {
  formInput: document.querySelector('.js-create-form'),
  imgList: document.querySelector('.img-list'),
};

refs.formInput.addEventListener('submit', e => {
  e.preventDefault();
  const userValue = e.target.elements.imgTitle.value.trim();
  searchImages(userValue).then(renderImgs).catch();
  e.target.reset();
});

// !=======================================imgTemplate

function imageTemplate(images) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = images.hits;
  return images.hits
    .map(
      image => `<li class="gallery-item">
      <a class="gallery-link" href=${image.largeImageURL}>
        <img
          class="gallery-image"
          src=${image.webformatURL}
          alt=${image.tags}
        />
      </a>
      <div class="description-wrap">
  <div class="imgs-properties">
    <p class="imgs-properties-name">Likes</p>
    <p class="imgs-properties-value">${image.likes}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Views</p>
    <p class="imgs-properties-value">${image.views}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Comments</p>
    <p class="imgs-properties-value">${image.comments}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Downloads</p>
    <p class="imgs-properties-value">${image.downloads}</p>
  </div>
</div>
    </li>
  `
    )
    .join('');
}

function renderImgs(images) {
  const markup = imageTemplate(images);
  refs.imgList.insertAdjacentHTML('beforeend', markup);
}

// new SimpleLightbox('.img-list a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });
