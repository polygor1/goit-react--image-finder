const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '24123899-30dafe3a116d297502be19e37';
const IMG_TYPE = 'photo';
const IMG_ORIENT = 'horizontal';
const PER_PAGE = 12;

export function fetchImg(query, page) {
  const url = `${BASE_URL}?image_type=${IMG_TYPE}&orientation=${IMG_ORIENT}&q=${query}&page=${page}&per_page=${PER_PAGE}&key=${API_KEY}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Oops! It is a fail'));
  });
}

const api = {
  fetchImg,
};

export default api;
