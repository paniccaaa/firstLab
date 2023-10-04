import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0
}

const integralSlice = createSlice({
  name: "integral",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
    },
  }
})