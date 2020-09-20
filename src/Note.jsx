import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const Note=(props)=>{
    return(<>
        <div className='note'>
        <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        </div>
        <button><DeleteOutlineIcon/></button>

        </div>
    </>)
}

export default Note