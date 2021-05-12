import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const Notes = ({id, text, date, deleteNote}) => {
    return (
        <div className='note' key={id}>
            <span> {text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever onClick={() => deleteNote(id)} className='delete-icon' size='1.5em'/>
            </div>
        </div>
    )
}

export default Notes