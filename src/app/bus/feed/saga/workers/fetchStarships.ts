// Core
import { put, call, delay } from 'redux-saga/effects';

// Types
import { Starships } from '../../types';

// Instruments
import { startFetching, fill, stopFetching } from '../../actions';

// API
import { api } from '../../../../api';

export function* fetchStarships(): Generator {
    try {
        yield put(startFetching());

        const results = yield call(api.starships.get);

        yield delay(200);
        yield put(fill(results as Starships));
    } catch (error) {
        console.log('fetchStarshipsAsync', error);
    } finally {
        yield put(stopFetching());
    }
}
