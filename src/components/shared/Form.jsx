import React from 'react'
import useInput from '../../hooks/useInput'

function Form() {
    const {values,onChange} = useInput({
        name:"",
        email:""
    })
  return (
    <form>
        <input className='border' onChange={onChange} type="text" name="name" value={values?.name}/>
        <input className='border' onChange={onChange} type="text" name="email" value={values?.email}/>
        <button type='submit'>Submit</button>
        {JSON.stringify(values)}
    </form>
  )
}

export default Form