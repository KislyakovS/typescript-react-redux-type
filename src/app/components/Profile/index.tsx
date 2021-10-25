// Core
import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import cx from 'classnames';

// Types
import { Profile as ProfileType } from '../../bus/profile/types';
import { AppState } from '../../init/rootReducer';

// Instruments
import Styles from './styles.module.css';
import { startFetching, fill, stopFetching } from '../../bus/profile/actions';

export const Profile: FC = () => {
    const dispatch = useDispatch();

    const _submit = (values: ProfileType, actions: FormikHelpers<ProfileType>) => {
        dispatch(startFetching());
        actions.setSubmitting(false);
        dispatch(fill(values));
        dispatch(stopFetching());
    };

    const profile = useSelector((state: AppState) => state.profile);
    const { firstName, lastName, isFetching } = profile;

    const buttonMessage = isFetching ? 'Обновляю' : 'Обновлено';

    const disabledStyle = cx({
        [Styles.disabled]: isFetching,
    });

    return (
        <section className={Styles.profile}>
            <h1>
                {firstName} {lastName}
            </h1>
            <Formik
                initialValues={{ firstName, lastName }}
                render={() => (
                    <Form>
                        <Field
                            className={disabledStyle}
                            disabled={isFetching}
                            name='firstName'
                            type='text'
                        />
                        <Field
                            className={disabledStyle}
                            disabled={isFetching}
                            name='lastName'
                            type='text'
                        />
                        <button
                            className={disabledStyle}
                            disabled={isFetching}
                            type='submit'>
                            {buttonMessage}
                        </button>
                    </Form>
                )}
                onSubmit={_submit}
            />
        </section>
    );
}
