import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data,setData]=useState({username:"",course:"",mobile:""})
  const [getdata,setGetdata]=useState([])

  const handlechange= (e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handlesubmit=async (e)=>{
      e.preventDefault()
      const res=await axios.post("http://localhost:3000/api/auth/data",data);
 alert(res.data.message)
//console.log(res);

       
       setData({username:"",course:"",mobile:""})

   }
     const fetch = async()=>{
  const res=await axios.get("http://localhost:3000/api/auth/user")
        const value = await res.data.data
         setGetdata(value)
        
   }
   useEffect(()=>{
    fetch()
   },[getdata])
   return (
    <>
      <div>
        <form >
          <label htmlFor="username">Name :</label>
          <input type="text" id='username' onChange={handlechange} value={data.username} name='username' placeholder='enter name'/><br />
          <label htmlFor="course">Course :</label>
          <input type="text" id='course' onChange={handlechange} value={data.course}name='course' placeholder='enter course'/><br />
          <label htmlFor="mobile">Name :</label>
          <input type="number" id='mobile' onChange={handlechange}value={data.mobile} name='mobile' placeholder='enter mobile'/><br />
          <input type="submit" onClick={handlesubmit}/>
        </form>
        <div>

         
        </div>
         {getdata.map((e,i)=>(
            <div key={i}>
              <p>{e.username}</p>
              <p>{e.course}</p>
              <p>{e.mobile}</p>
               
            </div>
        ))} 

      </div>
    </>
  )
}

export default App
