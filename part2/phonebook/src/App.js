import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      id:1,
      name: 'Arto Hellas',
      number: '9627391823'
    },
    { 
      id:2,
      name: 'Shaun Daniel',
      number: '8293847615'
    },
    { 
      id:3,
      name: 'Benny Daniel',
      number: '7162534251'
    },
  ])

  
  const [newName, setNewName] = useState({id:0,name:'',number:''})
  const [filtered, setFiltered] = useState(false)
  const [filter_query, setFilterQuery] = useState("")



  const filteredArray = filtered ? persons.filter((person)=>person.name.toLowerCase().includes(filter_query.toLowerCase())) : persons


  const handleNumber = (e) =>{
    setNewName({...newName,number:e.target.value})

  }


  const handleFilter = (e) => {
    setFilterQuery(e.target.value)
    e.target.value="" ? setFiltered(false) : setFiltered(true) 

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
        <h3>Add Contact</h3>
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
      <br />
      <h3>Search</h3>
      <input type="text" value={filter_query} onChange={handleFilter}/>
      <h2>Numbers</h2>
      <ul>
        {filteredArray.map((person)=><li key={person.id}><b>{person.name}</b> - {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App