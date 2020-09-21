import React, { useState } from 'react'


const Header=()=>{
    const [secTime,setSecTime]=useState()

    const timeFun=()=>{
      let  time=new Date().toLocaleTimeString()
        setSecTime(time)
    }

    setInterval(timeFun,1000)
   
    return(<>
       <div className='header'>
       <h1 >Google Keep </h1>
       <h4>{secTime}</h4>
       </div>
    </>)
}

export default Header