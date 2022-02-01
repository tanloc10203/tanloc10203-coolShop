const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  open: false,
}

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setOpen(state, { payload }) {
      state.open = payload;
    }
  }
});

const { reducer, actions } = headerSlice;

export const { setOpen } = actions;
export default reducer;