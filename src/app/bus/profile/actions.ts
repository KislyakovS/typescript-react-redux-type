// // Types
// import { types } from './types';

// export const profileActions = {
//     // Sync
//     fillProfile: (profile) => {
//         return {
//             type: types.FILL_PROFILE,
//             payload: profile
//         };
//     },
//     startFetching: () => {
//         return {
//             type: types.START_FETCHING,
//         };
//     },
//     stopFetching: () => {
//         return {
//             type: types.STOP_FETCHING,
//         };
//     },
// };

// Types
import {
    Profile,
    ProfileActionTypes,
    FILL_PROFILE,
    START_FETCHING,
    STOP_FETCHING,
} from './types';

export const fill = (payload: Profile): ProfileActionTypes => ({
    type: FILL_PROFILE,
    payload,
});

export const startFetching = (): ProfileActionTypes => ({
    type: START_FETCHING,
})

export const stopFetching = (): ProfileActionTypes => ({
    type: STOP_FETCHING,
});
