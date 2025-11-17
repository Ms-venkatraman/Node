import { useEffect, useState } from 'react'
import './App.css'
import axios  from 'axios'
function App() {
  const [formdata,serFormdata]=useState({username:"",age:"",course:""})
  const [getdata,setGetdata]=useState([])




  const fetchdata= async ()=>{
      const data=await axios.get('http://localhost:3000/api/users/getdata')
      setGetdata(data.data.data)
  }

  const handlechange=(e)=>{
      serFormdata({...formdata,[e.target.name]:e.target.value})
  }
  const handlesubmit=async (e)=>{
      e.preventDefault()
      const senddata= await axios.post('http://localhost:3000/api/users/senddata',formdata)
      console.log(senddata.data.actualdata);
      fetchdata()
  }

    useEffect(()=>{
    (async () => {
        await fetchdata();
})();
  },[formdata])


  return (
    <>
      <div>
        <form>
          <label>Name :</label>
          <input type="text" onChange={handlechange} name='username' placeholder='enter name ' /><br />
          <label> Age :</label>
          <input type="number"onChange={handlechange} name='age' placeholder='enter age' /><br />
          <label>course :</label>
          <input type="text" onChange={handlechange} name='course' placeholder='enter course '/><br />
         
          <input type="submit" onClick={handlesubmit}/><br />
        </form>
      </div>

      <h1>User Details...</h1>
   <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Course</th>
      <th colSpan="2">Action</th>
    </tr>
  </thead>

  <tbody>
    {getdata.map((e, i) => (
      <tr key={i}>
        <td>{e.username}</td>
        <td>{e.age}</td>
        <td>{e.course}</td>
        <td>
          <button>Edit</button>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      
    </>
  )
}

export default App
