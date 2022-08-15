import axios from 'axios';

class apiFetch {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = 'b2701829e6cba5c18fb7b3c9d2adde66';
  #SEARCH = 'search/movie';
  #TRAND = 'trending/movie/day';
  #ALL = 'movie/';

  trend = async page => {
    const respons = await axios.get(
      `${this.#BASE_URL}${this.#TRAND}?api_key=${this.#API_KEY}&page=${page}`
    );
    return respons.data.results;
  };
  search = async (query, page) => {
    const respons = await axios.get(
      `${this.#BASE_URL}${this.#SEARCH}?api_key=${
        this.#API_KEY
      }&query=${query}&page=${page}`
    );
    return respons.data;
  };

  id = async id => {
    const respons = await axios.get(
      `${this.#BASE_URL}${this.#ALL}/${id}?api_key=${this.#API_KEY}`
    );
    return respons.data;
  };

  cast = async id => {
    const respons = await axios.get(
      `${this.#BASE_URL}${this.#ALL}/${id}/credits?api_key=${this.#API_KEY}`
    );
    return respons.data.cast;
  };

  reviews = async id => {
    const respons = await axios.get(
      `${this.#BASE_URL}${this.#ALL}/${id}/reviews?api_key=${this.#API_KEY}`
    );
    return respons.data.results;
  };
}

const api = new apiFetch();
export default api;
