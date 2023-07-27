import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </>
  )
}

export default Heading
