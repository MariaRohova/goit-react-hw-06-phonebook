import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactReduser';
import { filtersReducer } from './filterReducer';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer
} from 'redux-persist';


const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const contactsPersistReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer,
);

export const store = configureStore({
  reducer: {
    contacts: contactsPersistReducer,
    filter: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);