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
    const onDelete=(id)=>{
        setAddItem((oldData)=>{
          return  oldData.filter((val,index)=>{
              return  index!==id
            })
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
                deleteItem={onDelete}
            />
        })}
        <Footer/>
    </>)
} 
export default App