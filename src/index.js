
import { enable } from "debug";
import { async } from "fast-glob";
import { add } from "lodash";
import { even } from "prelude-ls";
import { getPictures } from "./services/apiService";
import cardTmp from './templates/cardTmp.hbs'

// getPictures('car', '1')

const refs = {
    form: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    loadMore: document.querySelector('.load-more'),
};

const state = { page: 1, value: ""};
refs.loadMore.style.visibility = 'hidden';

refs.form.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);


async function onSearch(e){
e.preventDefault();
try {
    state.value = e.currentTarget.elements.query.value
    const pictures = await getPictures(state.value, state.page);
    refs.gallery.innerHTML = cardTmp(pictures);
    if (pictures.length > 11) {
        refs.loadMore.style.visibility = "visible";
    }

} catch (error) {
console.log(error.message);
    }
}

// Load more


async function onLoadMore(){
state.page += 1
const pictures = await getPictures(state.value, state.page);
refs.gallery.insertAdjacentHTML('beforeend', cardTmp(pictures));

refs.gallery.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}




 