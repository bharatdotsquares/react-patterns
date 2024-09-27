//render-props-pattern
import { useState } from "react"

const MouseTracker = ({children,sx})=>{
    const [mousePosition,setMousePosition] = useState({x:0,y:0})

    const handleMouseMove = (e)=>{
      setMousePosition({x:e.clientX,y:e.clientY})
    }
    return <div className="border" style={sx} onMouseMove={handleMouseMove}>{children(mousePosition)}</div>
}

const MouseTrackerBox = ({sx})=>{
    return(
        <MouseTracker sx={sx}>
           {({x,y})=><p>Render Props Pattern : Your mouse position is {x} {y}</p>}
        </MouseTracker>
    )
}
export default MouseTrackerBox