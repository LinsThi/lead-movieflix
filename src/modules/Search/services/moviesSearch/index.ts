import { GET_MOVIE, GET_SEARCH } from '~/shared/constants/api';
import request from '~/shared/services/request';

export async function searchMovies(
  query: string,
  page: number,
  genrer: string,
) {
  try {
    const path = `${GET_SEARCH}/${GET_MOVIE}`;
    const response = await request.get(path, { query, page, genrer });

    return response;
  } catch {
    return null;
  }
}
