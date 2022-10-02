// https://api.themoviedb.org/3/movie/550?api_key=8e91b8bd1f2d96428ef4a7725a482066

import axios from 'axios';

const API_KEY = '8e91b8bd1f2d96428ef4a7725a482066';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};
export async function getPopularApi() {
  try {
    const config = {
      url: `trending/movie/day`,
      params: {},
    };
    const { data } = await axios(config);
    return data;
  } catch (error) {
    console.log('error');
    return null;
  }
}

export async function getSearchApi(query) {
  try {
    const config = {
      url: `search/movie`,

      params: {
        query,
      },
    };
    const { data } = await axios(config);
    return data;
  } catch (error) {
    console.log('error');
    return null;
  }
}

export async function getMovieIdApi(movie_id) {
  try {
    const config = {
      url: `movie/${movie_id}`,

      params: {},
    };
    const { data } = await axios(config, movie_id);
    return data;
  } catch (error) {
    console.log('error');
    return null;
  }
}
export async function getMovieCastApi(movie_id) {
  try {
    const { data } = await axios(`movie/${movie_id}/credits`);
    return data.cast;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}
export async function getMovieReviewApi(movie_id) {
  try {
    const { data } = await axios(`movie/${movie_id}/reviews`);
    return data.results;
  } catch (error) {
    console.log('error');
    return null;
  }
}
