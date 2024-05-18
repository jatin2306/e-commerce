import { configureStore } from '@reduxjs/toolkit';
import reducers from './storeReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const devMode = process.env.NODE_ENV === 'development';

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: devMode
});

export const persistor = persistStore(store);
