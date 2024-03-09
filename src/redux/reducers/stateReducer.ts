import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, UserProfile } from "../../interfaces/interfaces";

// Definizione del tipo dello stato iniziale
interface initialStateType {
  firstState: string | null;
  testArray: number[] | null;
  arrayMovies: Movie[] | null;
  userProfile: UserProfile | null;
}
// Stato iniziale tipizzato
const initialState: initialStateType = {
  firstState: null,
  testArray: [],
  arrayMovies: [],
  userProfile: null,
};

// Creazione dello slice con TypeScript
const stateReducerSlice = createSlice({
  name: "stateReducerSlice",
  initialState,
  reducers: {
    // Azione definita nello slice con payload tipizzato
    setFirstState: (state, action: PayloadAction<string | null>) => {
      state.firstState = action.payload;
    },
    setTestArray: (state, action: PayloadAction<number[]>) => {
      state.testArray = action.payload;
    },
  },
});

// Esporto solo l'azione definita nello slice
export const { setFirstState } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
