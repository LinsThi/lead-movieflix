import { GET_MOVIE, GET_SEARCH } from '~/shared/constants/api';

import request from '../request';

export async function searchMovies(query: string, page: number) {
  try {
    const path = `${GET_SEARCH}/${GET_MOVIE}`;
    const response = await request.get(path, {
      query,
      page,
    });

    return response;
  } catch {
    return null;
  }
}
