import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.data = action.payload
    },
    clearData: (state) => {
      state.data = {}
    },

  },
})

// Action creators are generated for each case reducer function
export const { saveData, clearData } = counterSlice.actions

export default counterSlice.reducer