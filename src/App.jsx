import { useState } from "react";

function App() {
  const [tasks,setTasks]=useState([])
  const [newtask,setNewtask]=useState("")

  function handleEvent(event){
    setNewtask(event.target.value)
  }
  function addTask(){
    if(newtask.trim() !== ''){
      setTasks(t =>[...t,newtask])
      setNewtask('')
    }
  }

  function delTask(index){
    const updatedTasks=tasks.filter((_,i)=> i!==index);
    setTasks(updatedTasks)
  }
 

  return (<>
    <div className=" border-2 border- shadow-xl bg-blue-30 ">
    <h1 className=" text-3xl font-bold text-blue-950 justify-center">TO-DO</h1>
    </div>
    <div className=" my-3 ">
      <input type="text" className=" border-2 shadow-xl text-blue-950 font-bold " placeholder="Enter task..." value={newtask} onChange={handleEvent} />
      <button className=" border-2 shadow-xl border-blue-400 bg-blue-300 text-blue-950 font-semibold font-serif mx-2 w-16" onClick={addTask}>Add</button>
    </div>
     <div className="border-blue-500 shadow-2xl border-2">
     <ol>
      {tasks.map((task,index)=>
        <li className=" my-3">
          <span className=" text-blue-950 text-2xl font-bold font-serif ">{task}</span>
          <button className=" mx-3  shadow-xl border-blue-400 bg-blue-300 border-2 text-blue-950 font-semibold font-serif" onClick={() => delTask(index)}>Delete</button>
        </li>
      )}
     </ol>
     </div>
  </>
  );
}


export default App;
