import React from "react"
import PropTypes from "prop-types"

export const Button = ({size,color,text,...props})=>{
    return (
      <button style={{
        padding: size == "large" ? "32px" :"12px",
        fontSize: size == "large" ? "32px" :"12px",
        backgroundColor: color,
    }} {...props}
    >{text}</button>
   )
}

Button.propTypes={
    size:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
}


export const DangerButton = (props)=>{
    return <Button {...props} color="red"/>
}
export const SuccessButton = (props)=>{
    return <Button {...props} color="green"/>
}

