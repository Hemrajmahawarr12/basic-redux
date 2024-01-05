// import React, { useState } from 'react'

// function ToDoList1() {
//  const [activity,setActivity] = useState("");
//  const [listData,setlistData] = useState([]);
// //  const [toggle,setToggle] = useState(true);
 



//  function addTask(){
//   if(activity != ""){
//   setlistData([...listData,activity])
//   }else{
//     alert("please enter Task")
//   }
//  }

//  function RemoveHandle(index){
//  const update = listData.filter((elem,id) =>{
//   console.log(elem,id)
//   return index!=id;
//  })
//  setlistData(update);
//  console.log(update)
//  }
   
   
   
//   return(
//     <div className='container'>
//       <div className='header'>My To-Do List</div>
//       <input className='inp' placeholder='Add Something' value={activity} onChange={(e) => setActivity(e.target.value)}></input>
//       <button className='btttn' onClick={addTask}>Add Task</button>
    
//       {
//         listData != [] && listData.map((elem,i) =>{
//             // console.log("jhhgddh=======>",i )

//           return(
//           <p key={i}>
//             {/* <div style={{marginBottom:"10px", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> */}
//               {/* <div style={{fontSize:"25px", backgroundColor:"blue",marginBottom:"10px",height:"50px",width:"50%"}}>{elem}</div> */}
//             <div>
//             <div className='data'>{elem}</div> 
//             <button className='remove' onClick={()=>{RemoveHandle(i)}}>Remove</button>
//             <button className='edit'>Edit</button>
//             </div>        
//           </p>
//           )
         
//         })
        
//       }

//     </div>
//   )
// }
  
// export default ToDoList1;
