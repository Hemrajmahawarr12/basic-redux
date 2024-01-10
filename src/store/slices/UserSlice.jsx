import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            // console.log("🚀 ~ file: UserSlice.jsx:10 ~ addUser ~ ac̥tion:", action)
            state.push(action.payload)
         },
        removeSingleUser(state,action){ 
            state.splice(action.payload,1)
        },
        ClearAllUser(state,action){ 
            // console.log(state,action)
            return [];
        }
    }
});




console.log("show",userSlice.actions);

export default userSlice;
export const {addUser,removeSingleUser,ClearAllUser} = userSlice.actions;
