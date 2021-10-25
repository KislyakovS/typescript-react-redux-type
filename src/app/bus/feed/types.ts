type Starship = {
    name: string;
};

export type Starships = {
    results: Starship[]
};

// Sync
export const START_FETCHING = 'START_FETCHING';
type StarshipsStartFetchingAction = {
    type: typeof START_FETCHING;
};

export const STOP_FETCHING = 'STOP_FETCHING';
type StarshipsStopFetchingAction = {
    type: typeof STOP_FETCHING;
};

export const FILL_STARSHIPS = 'FILL_STARSHIPS';
type StarshipsFillAction = {
    type: typeof FILL_STARSHIPS;
    payload: Starships;
};

// Async
export const FETCH_STARSHIPS_ASYNC = 'FETCH_STARSHIPS_ASYNC';
export type StarshipsFetchAsyncAction = {
    type: typeof FETCH_STARSHIPS_ASYNC;
}

export type StarshipsActionTypes =
    | StarshipsStartFetchingAction
    | StarshipsStopFetchingAction
    | StarshipsFillAction
