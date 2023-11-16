import React, { useState } from 'react'

const initialState = {
    nombre: '',
    email: ''
}

const FormDate = () => {
    const [datos, setDatos] = useState(initialState)

    const cargaDatos =e=>{
        setDatos({...datos, [e.target.name] : e.target.value})
    }

    const  handleSubmit=e=>{
        
    }

  return (
    <form onSubmit={handleSubmit()}>
        <input aria-label="name-input" type='text' onChange={(e)=> cargaDatos(e)} value={datos.nombre} name='nombre'/>
        <input aria-label="email-input" type='email' onChange={(e)=> cargaDatos(e)} value={datos.email} name='email' />
        <input type='submit' />
    </form>
  )
}

export default FormDate
