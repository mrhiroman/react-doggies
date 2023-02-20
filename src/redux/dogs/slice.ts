import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Dog {
    id: number,
    name: string,
    minWeight: number,
    maxWeight: number,
    minHeight: number,
    maxHeight: number,
    minLifespan: number,
    maxLifespan: number,
    image: string,
}


interface DogsState {
    dogs: Dog[],
    currentPage: number,
    dogsCount: number
  }

const initialState: DogsState = {
  dogs: [],
  currentPage: 1,
  dogsCount: 0
};

const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    setDogs(state, action: PayloadAction<Dog[]>) {
        state.dogs = action.payload;
      },
    setCurrentPage(state, action: PayloadAction<number>) {
        state.currentPage = action.payload;
    },
    setDogsCount(state, action: PayloadAction<number>) {
      state.dogsCount = action.payload;
  },
}
});

export const { setDogs, setCurrentPage, setDogsCount } =
  dogsSlice.actions;

export default dogsSlice.reducer;