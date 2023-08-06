import { useEffect, useState } from 'react'
import AddContact from './components/AddContact.js'
import Search from './components/Search.js'
import Contact from './components/Contacts.js'
import axios from "axios"

const App = () => {

  

  const [persons, setPersons] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3002/persons").then((res)=>{
      setPersons(res.data)
    }) 
  },[])
  
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
      <h2>Phonebook</h2>
      <AddContact addPerson={addPerson} newName={newName} handleName={handleName} handleNumber={handleNumber}/>
      <Search filter_query={filter_query} handleFilter={handleFilter}/>
      <Contact filteredArray={filteredArray} />
    </div>
  )
}

export default App