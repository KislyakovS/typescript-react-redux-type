import { SWAPI_STARSHIPS } from './config';

import { Starships } from '../bus/feed/types';

type ResultsStarships = {
  results: Starships;
};

type APIFetch = {
  starships: {
    get: () => Promise<ResultsStarships>
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