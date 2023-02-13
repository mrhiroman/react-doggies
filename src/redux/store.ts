import { configureStore } from '@reduxjs/toolkit';
import dogs from './dogs/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    dogs
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
