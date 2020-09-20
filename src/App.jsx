import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'

const App=()=>{
    const [addItem,setAddItem]=useState([])

    const addNote=(note)=>{
        
        setAddItem((predata1)=>{
            return [...predata1,note]
        })
       
    }

    
    return(<>
        <Header/>
        <CreateNote passNote={addNote}/>
        {addItem.map((val,index)=>{
            return <Note
                id={index}
                key={index}
                title={val.title}
                content={val.content}
            />
        })}
        <Footer/>
    </>)
} 
export default App