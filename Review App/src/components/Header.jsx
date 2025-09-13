import React from 'react'

const Header = ({ text,bgColor,textColor }) => {

  const headerStyle = {
    backgroundColor:bgColor,
    color:textColor,
    display:"flex"
  }

  return (
    <header style={headerStyle}>
       {/* <div className='container'> */}
         <div style={{
          display:"flex",
          width:"80%",
          margin:"0px auto",
          justifyContent:"space-around",
          alignItems:"center"
         }}>
          <h1>{text}</h1>
          <button style={{
          backgroundColor: "darkblue",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Dark
        </button>
         </div>
       {/* </div> */}
      
    </header>
  )
}


export default Header