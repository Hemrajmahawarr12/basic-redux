import React from 'react'
import { useDispatch } from 'react-redux';
import { ClearAllUser } from './store/slices/UserSlice';

  const DeleteUsers = () => {
    const disp = useDispatch();


    const DeleteAllUsers=()=>{
      disp(ClearAllUser())
    }




  return (
      <button style={{marginLeft:"10%"}} onClick={DeleteAllUsers}>Clear All Users</button>
    )
}

export default DeleteUsers;
