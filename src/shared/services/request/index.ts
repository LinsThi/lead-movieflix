import { API_KEY, LANGUAGE } from '~/shared/constants/api';

import api from '../api';

interface ParamsProps {
  id?: number;
  query?: string;
  page?: number;
}

export default {
  async get(path?: string, params?: ParamsProps) {
    const url = `${path}${
      params?.id ? `${params.id}` : ''
    }?api_key=${API_KEY}&${LANGUAGE}${
      params?.query ? `&query=${params.query}&page=${params.page}` : ''
    }`;

    return api.get(url);
  },
};
