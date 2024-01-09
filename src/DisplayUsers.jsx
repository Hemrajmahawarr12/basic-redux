import React from 'react';
import { useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";



const DisplayUsers= ()=>{

    const data = useSelector((state) =>{ 
    return state.users  
    });
    // console.log("hjugdvhuk", data);

    return (
        <>
     {
        data.map((elem,id) =>{
            return(
                <div style={{width:"300px",padding:"10px", display:'flex', justifyContent:"space-between"}}>
             <li key={id}>{elem}</li>
             <button style={{border:"none", background:"none"}}> <MdDelete /> </button>
             </div>
            )           
        })
    }
     
     </>)
    
}

export default DisplayUsers;
