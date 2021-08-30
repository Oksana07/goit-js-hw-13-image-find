import axios from "axios";

const MY_API_KEY ='23115827-a7cc928e2386c212e5b47dc23';
axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export async function getPictures(querry, page){
    const {data:{hits},} = await axios.get(`&q=${querry}&page=${page}&per_page=12&key=${MY_API_KEY}`);
return hits;
}
