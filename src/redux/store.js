import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
/* import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: 'filter',
};
 */
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  /* middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          persistStore,
          persistReducer,
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }), */
});

/* export const persistor = persistStore(store); */
