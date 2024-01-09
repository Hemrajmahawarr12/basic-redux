import React from 'react'
import FakeuserData from './api';
import { useDispatch } from 'react-redux';
import { addUser } from './store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';
import DeleteAllUsers from './DeleteAllUsers';



function Reduxtoolkit() {


  const dispatch = useDispatch();
  console.log(dispatch)

  const AddUsername = (payload) => {
    // console.log(payload);
    return dispatch(addUser(payload));
  };

  return (
    <>
    <div className='Reduxtoolkit' style={{display:"flex",margin:"20px",padding:"20px",gap:"100px"}}>
      <h4>List of Users</h4>
      <button style={{borderRadius:"10px"}} onClick={() => AddUsername(FakeuserData())}>Add new Users</button>
      </div>
      <div>
      <ul style={{marginLeft:"2 %",listStyle:"none"}}>
        <DisplayUsers />
      </ul>
      <hr />
      <DeleteAllUsers />
    </div>
    </> 
  )
}

export default Reduxtoolkit
