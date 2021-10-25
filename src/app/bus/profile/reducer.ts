// Types
import {
    Profile,
    ProfileActionTypes,
    FILL_PROFILE,
    START_FETCHING,
    STOP_FETCHING
} from './types';

const initialState: Profile = {
    firstName: 'Уолтер',
    lastName: 'Уайт',
    isFetching: false,
};

export const profileReducer = (
    state = initialState,
    action: ProfileActionTypes
): Profile => {
    switch (action.type) {
        case FILL_PROFILE:
            return { ...state, ...action.payload };
        case START_FETCHING:
            return { ...state, isFetching: true };
        case STOP_FETCHING:
            return { ...state, isFetching: false };
        default:
            const x: never = action;
    }

    return state;
};
