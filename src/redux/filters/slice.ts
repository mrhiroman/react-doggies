import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface FiltersState {
    pageLimit: number,
    minHeight: number,
    maxHeight: number,
    minWeight: number,
    maxWeight: number,
    minLifespan: number,
    maxLifespan: number,
    breed: string
  }

const initialState: FiltersState = {
    pageLimit: 4,
    minHeight: 0,
    maxHeight: 200,
    minWeight: 0,
    maxWeight: 100,
    minLifespan: 0,
    maxLifespan: 30,
    breed: ""
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPageLimit(state, action: PayloadAction<number>) {
        state.pageLimit = action.payload;
      },
    setMinHeight(state, action: PayloadAction<number>) {
        state.minHeight = action.payload;
      },
    setMaxHeight(state, action: PayloadAction<number>) {
        state.maxHeight = action.payload;
      },
    setMinWeight(state, action: PayloadAction<number>) {
        state.minWeight = action.payload;
      },
    setMaxWeight(state, action: PayloadAction<number>) {
        state.maxWeight = action.payload;
      },
    setMinLifespan(state, action: PayloadAction<number>) {
        state.minLifespan = action.payload;
      },
    setMaxLifespan(state, action: PayloadAction<number>) {
        state.maxLifespan = action.payload;
      },
    setBreed(state, action: PayloadAction<string>) {
        state.breed = action.payload;
      },
}
});

export const { setPageLimit, setMinHeight, setMaxHeight, setMinWeight, setMaxWeight, setMinLifespan, setMaxLifespan, setBreed } =
  filtersSlice.actions;

export default filtersSlice.reducer;