// import { Button } from 'bootstrap';
// import React,{Component} from 'react'

// import { useState } from "react";

// export default function User() {
    
//     const [data, setData] = useState({
//         name: "hemraj",
//         student: "yes",
//         employee: "yes"
//     })

//     // function update(){
//     //     setData((prevState)=>{
//     //         return{
//     //             ...prevState,name:"prashant"
//     //         }})
//     // }

//     return (
//         <>
//             <h1>
//                 Name : {data.name}
//             </h1>
//             <h1>
//                Employee {data.employee}
//             </h1>
//         <button onClick={()=>setData({...data,name:"prashant"})}>Change</button>
//         </>
//     )
// }

// class user extends Component {
//     constructor()
//     {
//         super();
//         this.state={
//             data:"Mahawar"
//         }
//     }
//     apple()
//     {
//         this.setState()
//     }
//     render()
//     {
//         return (
//             <div className = "App">
//                 <h1>{this.state.data}</h1>
//                 <button onClick={()=>this.apple() }>Update Data</button>
//             </div>

//       )
//     }
// }
// //     const [data,setData] = useState(0)
// //     function updateData(){
// //         setData(data+1)
// //     }
// //       return (
// //         <div className = "App">
// //             <h1>{data}</h1>
// //             <button onClick={updateData}>Update Data</button>
// //         </div>

// //   )
// // }

// export default User;



// function Student(){
//     return(
//         <div>
//             <h1>Student Component</h1>
//         </div>
//     )
// }

// export default Student;




// import React from 'react'
// import './App.css'
// import Student from './Student'

//  function User() {
//   return (
//     <div>
//       <h1>Hello Raj</h1>
//       <Student />
//     </div>
//   )
// }

// export default User;



// import React, { createRef } from "react";


// class User extends React.Component {
//     constructor() {
//         super();
//         this.inputRef = createRef();
//     }
//     componentDidMount() {

//     }
//     getVal() {
//         this.inputRef.current.style.color="red"
//         this.inputRef.current.style.backgroundColor="pink"

//     }

//     render() {
//         return (
//             <div className="User">
//                 <h1> Ref inn React</h1>
//                 <input type="text" ref={this.inputRef}></input>
//                 <button onClick={() => this.getVal()}>Check Val</button>

//             </div>
//         )
//     }
// }

// export default User;




// import React from 'react'
// import { useRef,useState } from 'react' 

// function User(){
//     return(
//         <div className='App'>
//         <h1>HOC</h1>
//         <HOCred cmp={Counter} />    
//         <HOCgreen cmp={Counter} />    
//         <HOCblue cmp={Counter} />    
//         </div>

//     )
// }
// function HOCred(props){
//     return(
//         <div>
//             <h3 style={{backgroundColor:'red',width:'100px'}}>Red<props.cmp /></h3>
//         </div>
//     ) 
// }
// function HOCgreen(props){
//     return(
//         <div>
//             <h3 style={{backgroundColor:'green',width:'100px'}}>Green<props.cmp /></h3>
//         </div>
//     ) 
// }
// function HOCblue(props){
//     return(
//         <div>
//             <h3 style={{backgroundColor:'blue',width:'100px'}}>Blue<props.cmp /></h3>
//         </div>
//     ) 
// }
// function Counter(){
//     const[count,setCount]=useState(0)
//     return(
//         <div>
//             <h3>{count}</h3>
//             <button onClick={() => setCount(count+1)}>Click</button>
//         </div>
//     )
// }
// export default User;




// import React from 'react'
// import {BrowserRouter, Routes,Route, } from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About';
// import NavBar from './component/navBar';
// import Page404 from './component/Page404';
// import Use from './component/use';
// import Filter from "./component/Filter";
// import Contact from './component/Contact';
// import Company from "./component/Company";
// import Channel from "./component/Channel";
// import Other from "./component/Other";




// function User()
// {
//     return(
//         <div className='User'>
//             {/* <h1>Hemraj.</h1> */}
//             <BrowserRouter>
//             {/* <Link to={"/"}>Home</Link>
//             <br></br>
//             <Link to={"/about"}>About</Link> */}
//             <NavBar />
//             <Routes>
//                 <Route path="/" element={<Home />}></Route>
//                 <Route path="/about" element={<About />}></Route>
//                 <Route path="/*" element={<Page404 />}></Route>
//                 <Route path="/Filter" element={<Filter />}></Route>
//                 <Route path="/use/:name" element={<Use />}></Route>
//                 <Route path="/contact" element={<Contact />}>
//                     <Route path='/contact/Company' element={<Company />}></Route>
//                     <Route path='/contact/Channel' element={<Channel />}></Route>
//                     <Route path='/contact/Other' element={<Other />}></Route>
//                 </Route>
//                 {/* <Route path="/use/:name" element={<Use />}></Route> */}

//             </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

// export default User;




// import React, { useEffect, useState } from "react";




// function User() {
//     const [data, setData] = useState([])
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos/1').then((result) => {
//             result.json().then((resp) => {
//                 // console.log("result",resp)
//                 setData(resp)
//             })
//         }
//         )
//     }, [])
//     console.log(data)
//     return (
//         <div className="User">
//             <h1>Get API Call</h1>
//             <table>
//                 <tr>
//                     <td>Name</td>
//                     <td>Id</td>
//                     <td>Title</td>
//                     <td>Completed</td>
//                 </tr>

//             </table>
//         </div>
//     )

// }



// export default User;

// import React, { useEffect, useState } from 'react'

// const User = () => {
//     const [data, setData] = useState([]);
//     console.log("data===>",data);
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos').then((result) => 
//             result.json()).then((resp) => 

//                 setData(resp))
//     },[])
//     return (
//         <div>
//             <table border="1">
//                 <tr>
//                     <td>UserId</td>
//                     <td>Id</td>
//                     <td>Title</td>
//                     <td>Completed</td>
//                 </tr>
//             {
//                 data && data.map((item) => {
//                     return (
//                         <tr>
//                            <td>{item.userId}</td>
//                            <td>{item.id}</td>
//                            <td>{item.title}</td>
//                            <td>{item.Completed}</td>
//                         </tr>
//                     )
//                 })
//             }
//             </table>
//         </div>
//     )
// }

// export default User;









// import React, { useEffect,useState } from 'react'
// import axios from 'axios'

// function User() {
//     const [data,setData] = useState([])
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         // .then((resp) => resp.json())
//         .then((resp) => setData(resp.data) 

//         )
        

//     },[])
//   return (
//     <div>
//       <h1>Hemraj
//         {
//             data.map((item)=>{
//                 return(
//                        <div>{item.name}</div>
//                     )
//             }
            
//             )
//         }
//       </h1>
//     </div>
//   )
// }

// export default User






// import React, { useState } from 'react'
// import axios from 'axios'

// function User() {
//     const data = {fName:"", lName:""};
//     const [input,setInput] = useState(data)
   
//     const HandleName = (e)=>{
//         setInput({...input,[e.target.name]:e.target.value})
//     }
//     const HandleSubmit = (e)=>{
//             e.preventDefault();
//             axios.post("https://jsonplaceholder.typicode.com/users ",input)
//             .then((resp)=> {console.log(resp)})
//     }
//     const HandleUpdate = (e)=>{
//             e.preventDefault();
//             axios.put("https://jsonplaceholder.typicode.com/users",input)
//             .then((res̥p)=> {console.log(resp)})

//     }
//   return (
//     <div>
//       <h1>Login Name Page</h1>
//       <label>First Name : </label>
//       <input type='text' name='fName' value={input.fName} onChange={HandleName}></input><br></br>
//       <label>Last Name : </label>
//       <input type='text' name='lName' value={input.lName} onChange={HandleName}></input><br></br>
//       <button onClick={HandleSubmit}>Submit</button>
//       <button onClick={HandleUpdate}>Update</button>
//     </div>
//   )
// }


// export default User;










// import React from 'react'
// import {useState,useEffect} from 'react'
// import axios from 'axios'



// function User(){
//   const[data,setData] = useState([])
//   useEffect(() =>{
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then((resp) =>
//     // console.log(resp)
//     setData(resp.data)
//     )
//   })
//   return(
//     <div>
//       <h1>Hemraj</h1>
//       <h2>
//         {
//            data.map((hem) =>{
//             const{id, name, username, email} = hem;
//             return (
//             <div className='card' key={id}>
//               <h3>{id}</h3>
//               <h2>{name}</h2>
//               <h1>{username}</h1>
//               <h4>{email}</h4>
//             </div>
//             )
//            }
//            )
//         }
//       </h2>
//     </div>
//   )
// }


// export default User;







// function Football() {
//     const shoot = (a, b) => {
//       alert(b.type);
//       /*
//       'b' represents the React event that triggered the function,
//       in this case the 'click' event
//       */
//      console.log(b)
//     }
  
//     return (
//       <button onClick={(raj) => shoot("Goal!", raj)}>Take the shot!</button>
//     );
//   }
  
// //   const root = ReactDOM.createRoot(document.getElementById('root'));
// //   root.render(<Football />);

// export default Football;









// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function MissedGoal() {
// 	return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
// 	return <h1>GOAL!</h1>;
// }

// function Goal(props) {

//   const isGoal = props.isGoal;
//   console.log(!props)
// 	return (
// 		<>
// 			{ !isGoal ? <MadeGoal/> : <MissedGoal/> }
// 		</>
// 	);
// }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Goal isGoal={false} />)
// export default Goal












// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Car(props) {
//   return <li>I am a { props.brand }</li>;
  
// }

// function Garage() {
//   const cars = ['Ford', 'BMW', 'Audi'];
  
//   return (
//     <>
// 	    <h1>Who lives in my garage?</h1>
// 	    <ul>
//         {cars.map((car) => <Car brand={car} />)
//         }
//       </ul>
//     </>
//   );
// }


// export default Garage





// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function MyForm() {
//   const [name, setName] = useState("");

//   return (
  
//     <form>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           onChange={(e) => setName(f.target.value)
// }
//         />
//       </label>
//     </form>
    
//   )

// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);



// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//     console.log(event)
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }


// export default MyForm






// import React, { useEffect, useState } from 'react'

// function User() {
//     const [count, setCount] = useState(0)
//     const [countPlus, setCountPlus] = useState(0)
//     const handleCounting = ()=> {
//         if(count >= 2){
//             setCountPlus(50)
//         }
//         setCount(count + 1)
//     }
//     useEffect(()=> {
//         console.log("hi")
//     },[countPlus])
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={handleCounting}>click</button>
//     </div>
//   )
// }

// export default User







// import React, { useEffect, useState} from 'react';
// import axios from 'axios';

// function User() {
//   const [data,setData] = useState("")

//   //  useEffect(() => {
//   //    axios.get("https://jsonplaceholder.typicode.com/posts").then((item) => {
//   //     item.json().then((resp) =>{

//   //       setData(item)
//   //       console.log("mnfjkiov",item)
//   //     })
//   //   })
//   //   },[])



//   useEffect(() =>{
//     axios.get("https://jsonplaceholder.typicode.com/posts").then((item) =>{
//       setData(item)
//       // console.log(item)
//     })
//   },[])

   


//   return (
//     <div>
//       <h1>Get API Calling</h1>
      
//     </div>
//   )
// }

// export default User







import Button from '@mui/material/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {actionReducers} from "../src/Redex/Hemraj"


function User() {
  const data = useSelector(state => state.amount)
  const dispatch = useDispatch();
  // console.log(data);
 
  // console.log(amount)

  return (
    <div className='App'>
      <h3>Your Balance:{data}</h3>
      <h4>Deposit and WithDraw Money</h4>
      <Button onClick={()=> dispatch(actionReducers.WithDrawAmount(100))}>-</Button>
      <Button variant="contained" color="success">Update Balance</Button>
      <Button onClick={()=> dispatch(actionReducers.DepositAmount(100))}>+</Button>
      
    </div>
    
  )
}

export default User

