import PropTypes from "prop-types"
import React from "react"

const partiallyApply = (Component, partialProps) => {
    const WrappedComponent = (props) => <Component {...props} {...partialProps} />;
    WrappedComponent.displayName = `PartiallyApplied(${Component.displayName || Component.name || 'Component'})`;
    console.log("WrappnedComponent",WrappedComponent.displayName)
    return WrappedComponent;
};

 
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

export const DangerButton = partiallyApply(Button,{color:"red"})