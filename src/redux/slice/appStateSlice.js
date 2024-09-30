import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  complexityNumberlState: 0,
  isSuccessState: '',
  complexityErrorState: null,
}

const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setComplexityNumberlState(state, action) {
      state.complexityNumberlState = action.payload;
    },
    setIsSuccessState(state, action) {
      state.isSuccessState = action.payload;
    },
    setComplexityErrorState(state, action) {
      state.complexityErrorState = action.payload;
    },
  }
})

export const { setComplexityNumberlState, setIsSuccessState, setComplexityErrorState } = appStateSlice.actions;
export default appStateSlice.reducer;