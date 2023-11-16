import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Item from './Item'
import './style.css'

const ApiPrueba = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=> setUsers(res.data)).catch(e=> console.log(e))
    },[])
    console.log(users)
  return (
    <div className='contenedorTotal'>
      {users.map(item=> <Item key={item.id} item={item}/>)}
    </div>
  )
}

export default ApiPrueba
