import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      id:1,
      name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState({id:0,name:''})

  const handleName = (e) => {
    setNewName({...newName,name:e.target.value})
  }

  const addPerson = (e) =>{
    e.preventDefault()
    var dupliCheck = persons.some((person)=>person.name.toUpperCase()===newName.name.toUpperCase())
    if(dupliCheck){
      alert(`Cannot add ${newName.name}! Name already exists!`)
    }
    else{
      setPersons(persons.concat({id:persons.length+1,name:newName.name}))
    }
       

  }

  return (
    <div>
      <div>debug: {newName.name}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName.name} onChange={handleName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person)=><li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App