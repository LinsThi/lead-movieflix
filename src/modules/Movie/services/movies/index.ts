import {
  GET_MOVIE,
  GET_TRAILER,
  GET_TRENDING,
  GET_UPCOMING,
} from '~/shared/constants/api';
import request from '~/shared/services/request';

export async function searchMoviesTrending() {
  try {
    const path = `${GET_TRENDING}/${GET_MOVIE}/week`;
    const response = await request.get(path);

    return response;
  } catch {
    return null;
  }
}

export async function searchMoviesComing(page: number) {
  try {
    const path = `${GET_MOVIE}/${GET_UPCOMING}`;
    const response = await request.get(path, { page });

    return response;
  } catch {
    return null;
  }
}

export async function searchMoviesTrailer(id: number) {
  try {
    const path = `${GET_MOVIE}/${id}/${GET_TRAILER}`;
    const response = await request.get(path);

    return response;
  } catch {
    return null;
  }
}
