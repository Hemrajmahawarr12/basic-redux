import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import {removeSingleUser} from "./store/slices/UserSlice"



const DisplayUsers= ()=>{

    const dispatch = useDispatch();

    const data = useSelector((state) =>{ 
    return state.users  
    });
    // console.log("hjugdvhuk", data);
    const DeleteUser = (id) =>{
        dispatch(removeSingleUser(id))
    }

    return (
        <>
     {
        data.map((elem,id) =>{
            return(
                <div style={{width:"300px",padding:"10px", display:'flex', justifyContent:"space-between"}}>
             <li key={id}>{elem}</li>
             <button style={{border:"none", background:"none"}} onClick={() => DeleteUser(id)}> <MdDelete /> </button>
             </div>
            )           
        })
    }
     
     </>)
    
}

export default DisplayUsers;
