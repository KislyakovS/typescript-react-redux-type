// Types
import {
    Starships,
    StarshipsActionTypes,
    START_FETCHING,
    STOP_FETCHING,
    FILL_STARSHIPS,
} from './types';

type StarshipsState = {
    starships: Starships;
    isFetching: boolean;
}

const initialState: StarshipsState = {
    starships: [],
    isFetching: false,
};

export const feedReducer = (
    state = initialState,
    action: StarshipsActionTypes
): StarshipsState => {
    switch (action.type) {
        case START_FETCHING:
            return { ...state, isFetching: true };
        case STOP_FETCHING:
            return { ...state, isFetching: false };
        case FILL_STARSHIPS:
            return { ...state, starships: [...action.payload] };
        default:
            const x: never = state;
    }

    return state;
};
