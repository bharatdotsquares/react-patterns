const useDebounceApi = (fn,delay)=>{
    let timeoutId = null
    let abortControler = new AbortController()
    return (...args)=>{
        if(timeoutId){
            clearTimeout(timeoutId)
            abortControler.abort()
        }
        abortControler = new AbortController()
        const signal = abortControler.signal
        timeoutId = setTimeout(()=>{
            fn(...args,{signal})
            // fn(...args,{signal:AbortSignal.timeout(5000)})
        },delay)
    } 
}

export default useDebounceApi