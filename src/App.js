// import {useState} from 'react'
//import logo from './logo.svg';
// import './App.css';
// import './User';
// function App() {
//   return (
//     <div className="App">
//      <h1>
//      Hello World
//      </h1>
     
//     </div>
//   );
// }

//export default App;

// import logo from './logo.svg';
import './App.css';
// import {Link} from 'react-router-dom'
// import Student from './Student';
// import User from './User';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reduxtoolkit from './Reduxtoolkit';
import userSlice from './store/slices/UserSlice';
// import {UserSlice} from './store/slices/UserSlice';
// import './Student.css';
// import './User';;
// import './ToDoList.css';
// import Todolist from './Todolist';

// import ToDoList1 from './ToDoList1';
// import './ToDoList1.css';
// import ToDoList2 from './ToDoList2';
// import './ToDoList2.css';
 function App() {
   return (
     <div className="App">
      {/* <h1><Student />
      </h1> */}
      {/* <User /> / */}
      {/* <Student /> */}
      {/* <Student name={"Hemraj"} /> */}
      {/* <Student name={"Royal"} email ="r@gmail.com" />
      <Student name={"Raj"} email ="hem@gmail.com" /> */}
      {/* <Todolist /> */}
      {/* <ToDoList1 /> */}
      {/* <ToDoList2 />/ */}
      <Reduxtoolkit />
      <userSlice />
      
      
     </div>
   );
 }

 export default App;