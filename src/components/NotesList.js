import React from 'react'
import AddNote from './AddNote'
import Notes from './Notes'

const NotesList = ({ notes, handleAddNote, deleteNote }) => {
    return (
        <div className= 'notes-list'>
            {
                notes.map((note) => <Notes id={note.id} text={note.text} date={note.date} deleteNote={deleteNote} />)
                
            }
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NotesList