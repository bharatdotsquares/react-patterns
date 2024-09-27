import { useState } from "react"

function useInput({initialValues}) {
    const [values,setValues] = useState(initialValues)
    const handleChange = (e)=>{
        const {name,value} = e.target
        setValues((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    return {values,onChange:handleChange}
}

export default useInput