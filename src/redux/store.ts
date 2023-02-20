import { configureStore } from '@reduxjs/toolkit';
import dogs from './dogs/slice';
import filters from './filters/slice'
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    dogs,
    filters
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
