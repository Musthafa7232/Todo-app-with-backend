import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{}
}

const UserSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      SetUserData: (state,action) => {
        state.user=action.payload
      },
      ClearUserData: (state) => {
        state.user = {};
      },
    },
  });
  
  export const { SetUserData, ClearUserData } = UserSlice.actions;
  
  const UserReducer = UserSlice.reducer;
  
  export default UserReducer;
  