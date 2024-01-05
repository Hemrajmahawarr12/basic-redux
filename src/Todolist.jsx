import React, { useState } from 'react'

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [isedit, setIsedit] = useState(null);


  const handleEdit = () => {
    let arr = listData;
    arr[isedit] = activity;
    console.log(isedit);
    setListData(arr)
    setToggle(true)
    setActivity("")
    setIsedit(null)
  }
  function addActivity() {
    if (activity !== "" && toggle) {
      setListData((listData) => {
        const updateList = [...listData, activity]
        setActivity("")
        return updateList;
      })
    }
    else {
      alert("please enter Task")
    }
  }

  const RemoveHandle = (i) => {
    // console.log("index====>",i);
    const Remove = listData.filter((elem, id) => {
      return id !== i;
    })
    setListData(Remove);
  }

  const EditHandle = (i) => {
    // console.log(i)
    const newEdit = listData.filter((elem,id) => {
      return id === i;
    }
    
    )
    // console.log("🚀 ~ file: Todolist.jsx:45 ~ newEdit ~ newEdit:", newEdit)
    setToggle(false);
    setActivity(newEdit)
    setIsedit(i);
    //  console.log( "fldkgndkfjgn======>",i)
  }


  return (
    <div className='container'>
      <div className='header'>My To-Do List</div>
      <input className='inp' placeholder='Add Something' value={activity} onChange={(e) => setActivity(e.target.value)}></input>

      {
        toggle ? <button className='btttn' onClick={addActivity}>Add Task</button> : <button className='btttn' onClick={handleEdit}>Edit</button>
      }
      <p className='para'></p>
      {listData != [] && listData.map((data, i) => {
        return (
          <>
            <p key={i}>
              <div className='para'>{data}</div>
              <div className='rmvedt'>
                <button className='rmv' onClick={() => RemoveHandle(i)}>Remove</button>
                <button className='edt' onClick={() => EditHandle(i)}>Edit</button>
              </div>

            </p>
          </>
        )
      }
      )}

    </div>
  )
}

export default Todolist;  
