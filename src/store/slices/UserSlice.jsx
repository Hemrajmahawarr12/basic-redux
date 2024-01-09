import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            // console.log("🚀 ~ file: UserSlice.jsx:10 ~ addUser ~ ac̥tion:", action)
            state.push(action.payload)
         },
        removeUser(state,action){ },
        deleteUser(state,action){ }
    }
});




// console.log("show",userSlice.actions);

export default userSlice;
export const {addUser} = userSlice.actions;