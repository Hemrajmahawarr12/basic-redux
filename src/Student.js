// // // import { useState } from "react"
// // import React,{useState} from "react"
// // class Student extends React.Component {
// //     constructor(){
// //         super();
// //         this.state={
// //         }
// //     }
// //     render(){
// //         return(
// //             <div>
// //                 <h1>Hello {props.name}</h1>
// //                 {/* <h2>Hello {props.email}</h2> */}
// //                 <button onClick={()=>{}}>Click me</button>
// //             </div>
// //         )
// //     }

// // }

// // export default Student;


// // import React from 'react'
// // // import React,{ useState } from "react"
// // function Student(){
// //     const[data,setData]=React.useState(true)
// //     // const[print,setPrint]=useState(true)
// //     // function getData(val){
// //     //     setData(val.target.value)
// //     // }
// //     return(
// //     <div>
// //         {
// //         data?
// //         <h1> Hello World</h1>
// //         : null
// // }
// //         {/* <h1>{data}</h1> */}
// //         {/* <input type='text' onChange={getData}></input> */}
// //         <button onClick={()=>setData(!data)}>Toggle</button>
// //     </div>
// //     )

// // }
// // export default Student;








// // import React, { useState } from 'react'
// // function Raj()
// // {
// //     const[loggedin, setLoggedin]=useState(2)
// //     return(
// //         <div>
// //           {loggedin==1?<h1>Hello Hemraj Sir</h1>:loggedin==2?<h1>Hello Royal Raj</h1>:<h1>Hello Ms.Hemraj</h1>}
// //         </div>
// //     )
// // }

// // export default Raj;




// // import React, {useState} from 'react';
// // function Login(){
// //     const[user,setUser]=""
// //     const[password,setPassword]=""
// //     const[userErr, setuserErr]= useState(false)
// //     const[passErr, setPassErr]= useState(false)
// //     function LoginHandle(e){
// //      e.preventDefault()
// //     }
// //     function userHandle(e)
// //     {
// //        let item = e.target.value
// //        if(item.length<3){
// //          setuserErr(true)
// //        }else{
// //             setuserErr(false)
// //        }
// //     }
// //     function passwordHandle(e)
// //     {
// //        let item = e.target.value
// //        if(item.length<3){
// //          setPassErr(true)
// //        }else{
// //          setPassErr(false)
// //        }
// //     }
// //     return (
// //         <div>
// //         <form onSubmit = {LoginHandle}>
// //             <h1>Login Page</h1>
// //             <input placeholder='Enter your Id' onChange={userHandle} /> {userErr?<span>User not valid</span>:""}

// //             <br /><br />
// //         <input placeholder='Enter your Password' onChange={passwordHandle}/>{passErr?<span>password not valid</span>:""}
// //         <br /><br />
// //         <button>Submit</button>
// //         </form>
// //         </div>
// //     )
// // }



// // export default Login;





// // import React from 'react'
// // class Student extends React.Component{
// //   constructor()
// //   {
// //     super();
// //     this.state = {
// //       count: 0
// //     }
// //   }
// //   shouldComponentUpdate()
// //   {
// //     console.log("shouldComponentUpdate", this.state.count)
// //     if(this.state.count>5 && this.state.count<10){
// //         return true; 
// //     }
// //     // console.log("componentDidUpdate", snapshot)
// //   //  if(preProps.count === this.state.count){
// //   //   alert("Data is already same ")
// //   //  }
// //   // if(this.state.count<10){
// //   //   this.setState({count:this.state.count+1})

// //   // }

// //   }
// //   render()
// //   {
// //     // console.log("render")
// //     return(
// //       <div>
// //         <h1>Should Component Update {this.state.count}</h1>
// //         <button onClick={()=>{this.setState({count:this.state.count+1})}}>update name</button>
// //       </div>
// //     )
// //   }

// // }
// // export default Student;






// // import React from 'react'
// // import './royal.css'
// // import style from './custom.modules.css'
// // // import PropTypes from 'prop-types'
// // // import React, { Component } from 'react'

// // function Student(){
// //   // static propTypes = {}

// //   // render() {
// //     return (
// //       <div>
// //       <h1 className='Hem'>This is type 1st</h1>
// //       <h1 className={style.success}>This is type 2st</h1>
// //       <h1 style={{backgroundColor:"black",color:'white'}}>This is type 3st</h1>
// //       </div>
// //     )

// // }

// // export default Student;







// // import React from 'react'
// // // import { Button } from 'react-bootstrap'
// // // import Button from 'react-bootstrap/Button';
// // import { Button,Alert } from 'react-bootstrap';


// // function Student(){
// //   return(
// //     <div>
// //       <h1>Hemraj Mahawar</h1>
// //       <button>Update me</button>
// //       {/* <Button onClick={ () => {alert('Congrtulation')}}>Click Me</Button>
// //       <Button>Update me</Button> 
// //       <Button variant="primary">Primary</Button>{' '}
// //       <Button variant="secondary">Secondary</Button>{' '}
// //       <Button variant="success">Success</Button>{' '}
// //       <Button variant="warning">Warning</Button>{' '}
// //       <Button variant="danger">Danger</Button>{' '}
// //       <Button variant="info">Info</Button>{' '}
// //       <Button variant="light">Light</Button>{' '}
// //       <Button variant="dark">Dark</Button>
// //       <Button variant="link">Link</Button> */}

// // {[
// //         'primary',
// //         'secondary',
// //         'success',
// //         'danger',
// //         'warning',
// //         'info',
// //         'light',
// //         'dark',
// //       ].map((variant) => (
// //         <Alert key={variant} variant={variant}>
// //           This is a {variant} alert—check it out!
// //         </Alert>
// //       ))}
// //     </div>

// //   )
// // }


// // export default Student;




// // import React from 'react'
// // import {Table} from 'react-bootstrap'


// // function Student(){
// //   const Hemraj = [
// //     {name:"Hemraj",email:"hemr78@gmail.com",Address:[
// //       {Hn:"10", city:"Jaipur",country:"India"},
// //       {Hn:"15", city:"Nagaur",country:"India"},
// //       {Hn:"153", city:"Ajmer",country:"India"},
// //       {Hn:"895", city:"Noida",country:"India"}
// //     ]},
// //     {name:"Royal",email:"royal@gmail.com",Address:[
// //       {Hn:"10", city:"Jaipur",country:"India"},
// //       {Hn:"15", city:"Nagaur",country:"India"},
// //       {Hn:"153", city:"Ajmer",country:"India"},
// //       {Hn:"895", city:"Noida",country:"India"}
// //     ]},
// //     {name:"Raj",email:"RAJ@gmail.com",Address:[
// //       {Hn:"10", city:"Jaipur",country:"India"},
// //       {Hn:"15", city:"Nagaur",country:"India"},
// //       {Hn:"153", city:"Ajmer",country:"India"},
// //       {Hn:"895", city:"Noida",country:"India"}
// //     ]},
// //     {name:"Mohan",email:"mohan@gmail.com",Address:[
// //       {Hn:"10", city:"Jaipur",country:"India"},
// //       {Hn:"15", city:"Nagaur",country:"India"},
// //       {Hn:"153", city:"Ajmer",country:"India"},
// //       {Hn:"895", city:"Noida",country:"India"}
// //     ]}
// //   ]
// //  return(
// //   <div>
// //     <h1>This is new details</h1>
// //     <Table variant="dark" striped>
// //       <tbody>
// //     <tr>
// //         <td><h2>Name</h2></td>
// //         <td><h2>Email</h2></td>
// //         <td><h2>Houses</h2></td>
// //       </tr>
// //       {
// //         Hemraj.map((item) =>
// //         <tr>
// //           <td>{item.name}</td>
// //           <td>{item.email}</td>
// //           <td>
// //             <Table variant='dark' striped>
// //               <tbody>
// //               {
// //               item.Address.map((data) =>
// //               <tr>
// //                 <td>{data.Hn}</td>
// //                 <td>{data.city}</td>
// //                 <td>{data.country}</td>
// //               </tr>

// //               )
// //             }
// //               </tbody>

// //             </Table>

// //           </td>
// //         </tr>
// //         )
// //       }
// //       </tbody>  
// //     </Table>
// //   </div>
// //  )
// //  }
// // export default Student;




// // import React from 'react'

// // function Student(props)
// // {
// //    return(
// //     <div>
// //       <h1>Student Component</h1>
// //       <button onClick={props.alert }>Click me </button>
// //     </div>
// //    )
// // }

// // export default Student;







// // import React from "react";
// // import { BrowserRouter as Router,Routes, Link, Route } from 'react-router-dom'


// // function Student() {
// //     return (
// //         <div>
// //         <h1>Routing Setup</h1>

// //         <Router>

// //             <Link to="/home">Home Page</Link>
// //             <br/>
// //             <Link to="/about">About Page</Link>
// //             {/* <Route path="/home"><Home /></Route> */}


// //           <Routes>
// //             <Route path="/home" element={<Home />} />
// //             <Route path="/about" element={<About />} />
// //             <Route path="/*" element={<PagenotFound />} />
// //           </Routes>
// //         </Router>
// //       </div>

// //     )
// // }

// // function Home() {
// //     return (
// //         <div>
// //             <h1>Hello Home Page</h1>
// //             <h2>Hii This is a home page in India</h2>
// //         </div>
// //     )

// // }




// // function About() {
// //     return (
// //         <div>
// //             <h1>Hello About Page</h1>
// //             <h2>Hii This is a home page in India</h2>
// //         </div>
// //     )

// // }


// // function PagenotFound() {
// //     return (
// //         <div>
// //             <h1>404 Page not Found</h1>
// //             <h2>Hii This is a 404 page in India</h2>
// //         </div>
// //     )

// // }




// // export default Student;







// import React, { useState } from 'react'

// function Student() {
//     const [activity, setActivity] = useState("")
//     const [listData, setlistData] = useState([])
//     const [edit, setEdit] = useState(false)
//     const [editName, setEditName] = useState("")
//     const [editIndex, setEditIndex] = useState(null)

//     // function addActivity() {
//     //     // setlistData(...listData,activity)
//     //     // console.log(listData)
//     //     if(activity!=="") {
//     //         setlistData((listData) => {
//     //             const updatedList = [...listData, activity]
//     //             setActivity('');
//     //             return updatedList
//     //         })
//     //     }

//     // }
//     function addActivity() {
//         // setlistData(...listData,activity)
//         // console.log(listData)
//         if (activity !== "") {
//             setlistData((listData) => {
//                 const updatedList = [...listData, activity]
//                 setActivity('');
//                 return updatedList
//             })
//         }else{
//             alert("Please enter task")
//         }

//     }
//     const handleEdit = (data, i) => {
//         setEdit(true)
//         setEditName(data)
//         setEditIndex(i)
//     }
//     const handleEditSave = (i) => {
//         // setlistData((prevItems) => {
//         //   const newItems = [...prevItems];
//         //   newItems[i] = String(editName); // Convert editName to string
//         //   return newItems;
//         // });
    
//         // // Reset edit state after saving
        
//         let newItemArray = listData
//         console.log(newItemArray)
//         newItemArray[i] = editName
//         setlistData(newItemArray)
//         setEdit(false);
//         setEditName('');
//         setEditIndex(null);
//       };
    

//     function removelistData(i) {
//         const updateListData = listData.filter((elem, id) => {
//             return i != id
//         })
//         setlistData(updateListData);
//     }
//     return (
//         <>
//             <div className='container'>
//                 <div className='header'>To-Do List</div>
//                 <input type='text' className='inp' placeholder='Add Something' value={activity} onChange={(e) => setActivity(e.target.value)}></input>
//                 <button className='bttn' onClick={addActivity}>Add task</button>
//                 <p className='para'></p>
//                 {listData.length !== 0 && listData.map((data, i) => {
//                     return (
//                         <>
//                             {console.log(listData)}
//                             <p key={i}>
//                                 {
//                                     edit && i === editIndex ? (
//                                         <div>
//                                             {console.log(editName)}
//                                             <input type='text' className='inp' placeholder='Add Something' value={editName} onChange={(e)=> setEditName(e.target.value)}></input>
//                                             <button className='bttn' onClick={()=>handleEditSave(i)}>edit task</button>
//                                         </div>
//                                     )
//                                         :
//                                         (
//                                         <>
//                                             <div className='hem'><p>{data}</p></div>
//                                             <div className='hemraj'>
//                                                 <button onClick={() => removelistData(i)}>Remove</button>
//                                                 <button onClick={() => handleEdit(data, i)}>Edit</button>
//                                                 </div>
//                                         </>
//                                 )
//                                 }

                                
//                             </p>
//                         </>
//                     )
//                 }
//                 )}
//             </div>
//         </>
//     )
// }

// export default Student;

