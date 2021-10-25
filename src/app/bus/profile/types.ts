export type Profile = {
    firstName: string,
    lastName: string,
}

// Sync
export const FILL_PROFILE = 'FILL_PROFILE';
type fillProfileAction = {
    type: typeof FILL_PROFILE;
    payload: Profile,
};

export const START_FETCHING = 'START_FETCHING';
type startFetchingAction = {
    type: typeof START_FETCHING;
}

export const STOP_FETCHING = 'STOP_FETCHING';
type stopFetchingAction = {
    type: typeof STOP_FETCHING;
};

export type ProfileActionTypes =
    | fillProfileAction
    | startFetchingAction
    | stopFetchingAction;