// calling Api Practice 

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Assets/ReadApi.css'

  const ReadApi = () => {
    const[user,setuserdata] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{setuserdata(response.data)})
    },[])

  return (
    <div><div className='ogDataDisplay'>
      <h1 > Last known data</h1>
      {user.map((data)=>{
        return(
            <div>
            <h1><span>{data.id}) </span>
            <span>  {data.name} </span><br/>
            <span> Contact detail</span><br/>
            <span> Phone no:- {data.phone} </span><br/>
            <span> Email id:-  {data.email}</span>
          
            </h1>
            
            </div>
          )})

        }
    </div></div>
  
)
}


export default ReadApi
