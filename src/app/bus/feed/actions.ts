// Types
import {
    Starships,
    StarshipsActionTypes,
    StarshipsFetchAsyncAction,
    START_FETCHING,
    STOP_FETCHING,
    FILL_STARSHIPS,
    FETCH_STARSHIPS_ASYNC,
} from './types';

// Sync
export const startFetching = (): StarshipsActionTypes => ({
    type: START_FETCHING,
});

export const stopFetching = (): StarshipsActionTypes => ({
    type: STOP_FETCHING,
});

export const fill = (payload: Starships): StarshipsActionTypes => ({
    type: FILL_STARSHIPS,
    payload,
});

// Async
export const fetchAsync = (): StarshipsFetchAsyncAction => ({
    type: FETCH_STARSHIPS_ASYNC,
});