// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { FETCH_STARSHIPS_ASYNC } from '../types';

// Workers
import { fetchStarships } from './workers';

function* watchFetchStarships(): Generator {
    yield takeEvery(FETCH_STARSHIPS_ASYNC, fetchStarships);
}

export function* watchFeed(): Generator {
    yield all([call(watchFetchStarships)]);
}
