import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      id:1,
      name: 'Arto Hellas',
      number: '9627391823'
    }
  ]) 
  const [newName, setNewName] = useState({id:0,name:'',number:''})

  const handleNumber = (e) =>{
    setNewName({...newName,number:e.target.value})

  }

  const handleName = (e) => {
    setNewName({...newName,name:e.target.value})
  }

  const addPerson = (e) =>{
    e.preventDefault()
    var dupliCheck = persons.some((person)=>person.name.toUpperCase()===newName.name.toUpperCase())
    var contCheck = persons.some((person)=>person.number===newName.number)
    if(dupliCheck){
      alert(`Cannot add ${newName.name}! Name already exists!`)
    }
    else if(contCheck){
      alert(`Cannot add the number - ${newName.number}! Number already exists!`)
    }
    else{
      setPersons(persons.concat({id:persons.length+1,name:newName.name,number:newName.number}))
    }
       

  }

  return (
    <div>
      <div>debug: {newName.name} {newName.number}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName.name} onChange={handleName}/>
          <br />
          <br />
          Phone: <input value={newName.number} onChange={handleNumber}/>

        </div>
        <div>
          
          <button type="submit">Add Contact</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person)=><li key={person.id}><b>{person.name}</b> - {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App