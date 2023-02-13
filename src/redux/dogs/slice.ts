import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Dog {
    id: number,
    name: string,
    origin: string,
    weight: {
        imperial: string,
        metric: string
    }
    height: {
        imperial: string,
        metric: string
    }
    life_span: string,
    image: {
        url: string
    }
    reference_image_id: string
}


interface DogsState {
    dogs: Dog[],
    currentPage: number,
  }

const initialState: DogsState = {
  dogs: [],
  currentPage: 1,
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
}
});

export const { setDogs, setCurrentPage } =
  dogsSlice.actions;

export default dogsSlice.reducer;