// import React, { useState } from 'react'

// function ToDoList2() {
//  const[input, setInput] = useState("");
//  const[arr, setArr] = useState([]);
//  const[toggle, setToggle ] = useState(true);
//  const[edit, setEdit] = useState(null);



//  function AddTask(){
//     if(input != "" && toggle){
//         setArr([...arr,input])
//         setInput("")
//     }else{
//        alert("please enter task")
//     }
//  }
//  function RemoveHandle(index){
//      const Remove = arr.filter((elem, id) =>{
//         return index != id
//      })
//      setArr(Remove);
//      }

//      function EditHandle(i){

//          const edt = arr.filter((elem,id) =>{
//              return id === i;
//             })
//          setToggle(false)
//          setInput(edt);
//          setEdit(i);
//      }


//      function EdtBtn(){
//         var array = arr;
//         array[edit]= input;
//         console.log(edit)
//         setArr(array)
//         setToggle(true)
//         setInput("")
//         setEdit(null)

//     }



//   return (
//     <div className='container' style={{backgroundColor:"green", margin:"30px auto", padding:"10px"}}>
//             <h1 style={{fontSize:"50px", margin:"10px auto", color:"#ffffff"}}>My To Do List</h1>
//             <input className='inp' placeholder='Add Task' style={{margin:"20px", fontSize:"25px",borderRadius:"5px"}} value={input} onChange={(e) => setInput(e.target.value)}></input>
//             {
//                 toggle ?  <button style={{margin:"20px", fontSize:"25px", borderRadius:"6px", backgroundColor:"blue",color:"#ffffff"}} onClick={AddTask}>Add Task</button> : <button style={{margin:"20px", fontSize:"25px", borderRadius:"6px", backgroundColor:"blue",color:"#ffffff"}} onClick={EdtBtn}>Edit</button>
//             }
           
            
//             {
//                 arr.map((elem,i) =>{
                     
//                     return( 
//                         <p key={i}>
                            
//                             <div style={{backgroundColor:"#ffffff", margin:"20px auto", fontSize:"25px", width:"900px"}}>{elem}</div>
//                              <button style={{margin:"10px", borderRadius:"6px", fontSize:"20px"}} onClick={() =>RemoveHandle(i)}>Remove</button>
//                              <button style={{borderRadius:"6px",fontSize:"20px"}} onClick={ () =>EditHandle(i)}>Edit</button>
                            
//                         </p>
//                     )
//                 })
//             }
      
//     </div>
    
//   )
// }

// export default ToDoList2;
import React from 'react'

function ToDoList2() {
  return (
    <div>
      I am A seller
    </div>
  )
}

export default ToDoList2
