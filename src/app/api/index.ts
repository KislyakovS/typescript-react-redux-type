import { SWAPI_STARSHIPS } from './config';

import { Starships } from '../bus/feed/types';

type APIFetch = {
  starships: {
    get: () => Promise<Starships>
  };
};

export const api: APIFetch = {
  starships: {
    get() {
      return fetch(SWAPI_STARSHIPS)
        .then((response) => response.json())
        .then(({ results }) => ({ results }));
    }
  },
};