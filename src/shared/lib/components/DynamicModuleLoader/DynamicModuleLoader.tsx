import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

export type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducerList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerKey, reducer]:ReducerListEntry) => {
            store.reducerManager.add(reducerKey, reducer);
            dispatch({ type: `@INIT ${reducerKey} reducer` });
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerKey, reducer]:ReducerListEntry) => {
                    store.reducerManager.remove(reducerKey);
                    dispatch({ type: `@DESTROY ${reducerKey} reducer` });
                });
            }
        };
    }, []);

    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
