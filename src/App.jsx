
import { useEffect, useState } from 'react'
import './App.css'
import { addDetailsAPI, getDetailsAPI } from './services/allAPI'

function App() {

  useEffect(()=>{
      getDetails()
  },[])

  const [todoDetails,setTodoDetails] = useState({
    title:"",
    description:"",
    deadline:"",
    Priority:"",
    status:""
  })
    
  const [allTask,setAllTask] = useState([])

  const addDetails=async()=>{
    const {title,description,deadline,Priority,status} = todoDetails
    if(title && description && deadline && Priority && status ){
      try{
        const result = await addDetailsAPI(todoDetails)
        getDetails()
        if(result.status >= 200 && result.status < 300){
          alert('Data added Successfully')
          }
        else{
          console.log(result);
        }

      }catch(err){
        console.log(err);
        
      }

    }else{
      alert("enter details fully")
    }
  }


  const getDetails=async()=>{
    try{
      const result = await getDetailsAPI()
      setAllTask(result.data)

    }catch(err){
      console.log(err);
      
    }

  }

  return (
    <>
      {/* nav */}
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" classNameName="d-inline-block align-text-top"> */}
            To-Do-List
          </a>
        </div>
      </nav>

    {/* to-do */}
      <div className='m-5'>
        <h1>Assign task</h1>

        {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

{/* modal input */}

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"></span>
        <input onChange={e=>setTodoDetails({...todoDetails,title:e.target.value})} type="text" class="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"></span>
        <input onChange={e=>setTodoDetails({...todoDetails,description:e.target.value})} type="text" class="form-control" placeholder="Description" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"></span>
        <input onChange={e=>setTodoDetails({...todoDetails,deadline:e.target.value})} type="text" class="form-control" placeholder="deadline" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>

      
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"></span>
        <input onChange={e=>setTodoDetails({...todoDetails,Priority:e.target.value})} type="text" class="form-control" placeholder="Priority" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>

 
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"></span>
        <input onChange={e=>setTodoDetails({...todoDetails,status:e.target.value})} type="text" class="form-control" placeholder="status" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={addDetails} type="button" data-bs-dismiss="modal" className="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>

      </div>
      


      {/* table */}

      <table className="table ">
  <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">deadline</th>
          <th scope="col">Priority level</th>
          <th scope="col">Completion Status</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>

        {      
        allTask.map(list=>(

          <tr>
          <th scope="row"></th>
          <td>{list.title}</td>
          <td>{list.description}</td>
          <td>{list.deadline}</td>
          <td>{list.Priority}</td>
          <td>{list.status}</td>
          <td><button type="button" class="btn btn-danger">Delete</button></td>

        </tr>

        ))
        
        }
        
      </tbody>
    </table>
    </>
  )
}

export default App
