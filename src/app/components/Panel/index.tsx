// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Types
import { AppState } from '../../init/rootReducer';

// Instruments
import Styles from './styles.module.css';
import { fetchAsync as fetchStarshipsAsync } from '../../bus/feed/actions';
import { StarshipTile } from '../StarshipTile';

export const Panel = () => {
    const dispatch = useDispatch();
    const starships = useSelector((state: AppState) => state.feed.starships);
    const isFetching = useSelector((state: AppState) => state.feed.isFetching);

    const _fetchPostsAsync = () => {
        return dispatch(fetchStarshipsAsync());
    };

    const starshipsJSX = starships.map((starship) => {
        return (
            <StarshipTile
                key={starship.name}
                {...starship}
            />
        )
    });

    const buttonMessage = isFetching
        ? '⏳ Вызываю...'
        : '📲 Вызвать корабли';

    return (
        <section className={Styles.panel}>
            <h1>🖥</h1>
            <button
                disabled={isFetching}
                onClick={_fetchPostsAsync}
            >
                {buttonMessage}
            </button>
            <ul>{starshipsJSX}</ul>
        </section>
    );
}
