import { GET_GENRER, GET_LIST, GET_MOVIE } from '~/shared/constants/api';
import request from '~/shared/services/request';

export async function getCategory() {
  try {
    const path = `${GET_GENRER}/${GET_MOVIE}/${GET_LIST}`;
    const response = await request.get(path, { translate: true });

    return response;
  } catch {
    return null;
  }
}
