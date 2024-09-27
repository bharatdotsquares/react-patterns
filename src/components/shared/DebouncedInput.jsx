import React, { useState } from 'react'
import useDebounceApi from '../../hooks/useDebounceApi'

function DebouncedInput() {
  let [data,setData] = useState([])
  const getUsers = async (txt,signal)=>{
   let res = await fetch("https://swapi.dev/api/people?search="+txt,signal)
   if(signal.aborted) return 
   let resData = await res.json()
   setData(resData.results)
  } 
  let debouncedFxn = useDebounceApi(getUsers,1000)
  return (
    <div>
        <input type="text" onInput={(e)=>debouncedFxn(e.target.value)}/>
        {
          data.map((txt)=>JSON.stringify(txt))  
        }
    </div>
  )
}

export default DebouncedInput