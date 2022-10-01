import { configureStore, findNonSerializableValue } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import messageReducer from './message/messageSlice';

const logger = createLogger();

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(findNonSerializableValue).concat(logger), // eslint-disable-line
});

export default store;
