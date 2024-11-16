import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Seun Ogunsanya", email: "seun.ogunsanya@ss-limited.com" },
  { id: "2", name: "Helen Uka", email: "helen.uka@ss-limited.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
