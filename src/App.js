import React, {useState, useEffect} from 'react'
import {nanoid} from 'nanoid'
import NotesList from './components/NotesList'
import SearchComponent from './components/Search'
import HeaderComponent from './components/Header'

const App = () => {
    const[notes, setNotes] = useState([])
  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  const [searchText, setSearchText] = useState('')

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-data')
    )
    if(savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notes))
  }, [notes])


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <HeaderComponent handleToggle = {setDarkMode}/>
        <SearchComponent handleSearch={setSearchText} />
        <NotesList notes={notes.filter((note) => 
          note.text.toLowerCase().includes(searchText)
          )} 
          handleAddNote={addNote} 
          deleteNote={deleteNote} />
      </div>
    </div>
  )
}

export default App