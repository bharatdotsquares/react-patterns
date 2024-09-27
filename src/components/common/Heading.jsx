import React from 'react'

function Heading({children,cls}) {
  return (
    <h1 className={`font-bold text-lg ${cls}`}>{children}</h1>
  )
}

export default Heading