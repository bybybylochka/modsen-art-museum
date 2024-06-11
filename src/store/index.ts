import { combineReducers } from 'redux';
import artReducer from '@store/reducers/artReducer';
import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { ArtActionTypes } from '@store/actions/artActions';

const rootReducer = combineReducers({
    art: artReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    ArtActionTypes
>;

const store = configureStore({
    reducer: rootReducer,
});

window.store = store;
export default store;
