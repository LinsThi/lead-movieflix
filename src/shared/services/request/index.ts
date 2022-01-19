import { API_KEY, LANGUAGE } from '~/shared/constants/api';

import api from '../api';

interface ParamsProps {
  id?: number;
  translate?: boolean;
  query?: string;
  page?: number;
  genrer?: string;
}

export default {
  async get(path?: string, params?: ParamsProps) {
    const url = `${path}${
      params?.id ? `${params.id}` : ''
    }?api_key=${API_KEY}&${!params?.translate ? LANGUAGE : ''}${
      params?.query ? `&query=${params.query}&page=${params.page}` : ''
    }${params?.genrer ? `&with_genres=${params.genrer}` : ''}`;

    return api.get(url);
  },
};
