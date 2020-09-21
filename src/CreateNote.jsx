import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>{
    const [expend,setExpend]=useState(false)

    const [note,setNote]=useState({
        title:'',
        content:''
    })

    const inputEvent=(e)=>{
       const {name,value}=e.target
      setNote((predata)=>{
          return{
            ...predata,
            [name]:value
          }
      })
    }

    const addevent=(e)=>{
        e.preventDefault()
       props.passNote(note)
       setNote({
        title:'',
        content:''
       })
    }
    const expandFun=()=>{
        setExpend(true)
    }
    const normalMode=()=>{
        setExpend(false)
    }
    

    return(<>
        <div className='main_note' onDoubleClick={normalMode}>
        <form>
            {expend?
            <input type='text'
             placeholder='Title'
              name='title'
               autoComplete='off'
               value={note.title}
               onChange={inputEvent}
                /> : null}

            <textarea rows=''
             cols=''
              placeholder='Write note...'
               name='content'
               value={note.content}
               onChange={inputEvent}
               onClick={expandFun}
               >
               </textarea>
             {expend?  
            <div className='btn'>
            <button className='del' onClick={addevent}><AddIcon className='plus_sign'/></button>
            </div>
            :null}
        </form>
        </div>
    </>)
}

export default CreateNote