import { useEffect, useState } from "react"

const useGetApi = (url="",deps=[])=>{
    const [data,setData] = useState({})
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
       (async ()=>{
         setLoading(true)
         try{
            const res = await fetch(url)
            const resData = await res.json()
            setData(resData)   
         } catch(err){
            setError(err)
         }finally{
            setLoading(false)
         }
       })()                
    },deps)


    return {data,error,loading}
}

export default useGetApi