import Note from './components/Note'
import { useState, useEffect} from 'react'
import axios from "axios"


const App = (props) => {

  const [notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState({id:0,content:'',important:false})
  const [showAll,setShowAll] =useState(true)


  useEffect(()=>{
    console.log('effect')
    axios.get("http://localhost:3002/notes").then(res=>{
      console.log('promise fulfilled')
      setNotes(res.data)
    })
  },[])

  const handleNewNote = (event) => {
    setNewNote({...newNote,content:event.target.value})
  }

  const addNote = (event) => {
    event.preventDefault()
    const newNoteObj = {
      id:notes.length + 1,
      content:newNote.content,
      important:newNote.important,
    }
    setNotes(notes.concat(newNoteObj))
    setNewNote({id:0,content:'',important:false})
    console.log(notes)
  }


  const showNotes = showAll ? notes : notes.filter((note)=>note.important===true)


  return (
    <div>
      <h1>Notes</h1>
      <button onClick={()=>setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
      <ul>
        <ul>
          {showNotes.map(note => 
            <Note key={note.id} note={note} />
          )}
        </ul>
      </ul>

    <form onSubmit={addNote}>
      <input type="text" value={newNote.content } onChange={handleNewNote} placeholder='Write note here...'/>
      <input type="checkbox" onChange={()=>setNewNote({...newNote,important:!newNote.important})} name='imp'/>
      <label htmlFor="imp">important?</label> <br /><br />
      <button type="submit" >Save</button>
    </form>
    </div>
  )
}

export default App
