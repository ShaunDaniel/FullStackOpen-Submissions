import { useEffect, useState } from "react";
import "./App.css";


import contactService from "./services/contacts.js"

import AddContact from "./components/AddContact.js";
import Search from "./components/Search.js";
import Contact from "./components/Contacts.js";

const App = () => {
  
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState({ name: "", number: "" });
  const [filtered, setFiltered] = useState(false);
  const [filter_query, setFilterQuery] = useState("");


  useEffect(() => {
    contactService.getAll().then((res) => {
      setPersons(res.data);
    });
  }, []);


  
  //filtered flag setter
  const handleFilter = (e) => {
    setFilterQuery(e.target.value);
    e.target.value = "" ? setFiltered(false) : setFiltered(true);
  };
  //checks if filtered is true & filters & updates person state acc to search term
  const filteredArray = filtered ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter_query.toLowerCase())
      )
    : persons;

  // storing states of name & number input fields

  const handleNumber = (e) => {
    setNewName({ ...newName, number: e.target.value });
  };

  const handleName = (e) => {
    setNewName({ ...newName, name: e.target.value });
  };


  const handleDelete = (e) =>{
    const deleteConfirm = window.confirm(`Do you wish to delete ${persons.find((person) => person.id===Number((e.target.value))).name}?`)
    if(deleteConfirm){contactService.deleteContact(e.target.value).then((res)=>{
      setPersons(persons.filter((person)=>person.id!==Number(e.target.value)))
    })} 
  }

  const addPerson = (e) => {
    e.preventDefault();
    
    var dupliCheck = persons.some((person) => person.name.toUpperCase() === newName.name.toUpperCase());
    var contCheck = persons.some((person) => person.number === newName.number);
    
    if (dupliCheck) {
      const replaceCheck = window.confirm(`${newName.name} already exists in phonebook! Do you want to replace the old number with ${newName.number}?`);
      if(replaceCheck) {contactService.updateContact(newName,persons.filter((person)=>person.name===newName.name)[0].id).then((res)=>{
        console.log(res)
        window.location.reload()
      })}

    } 
    
    else if (contCheck) {
      alert(`Cannot add the number - ${newName.number}! Number already exists!`);
    } 
    
    else {
      contactService.createContact(newName).then((res)=>{
        console.log(res)
        setPersons([...persons,newName])
        setNewName({name:"",number:""})
      })     
    }
  };

  return (
    <>
      <div className="navbar nav m-0 p-2">
        <h2 className="app-title navbar-brand fs-2 px-2 text-light fw-bolder">📞 Phonebook</h2>
      </div>
      <div className="d-flex justify-content-around flex-column flex-md-row">
      
        <div className="add-contact flex-fill">
          <AddContact addPerson={addPerson} newName={newName} handleName={handleName} handleNumber={handleNumber}/>
          <Search filter_query={filter_query} handleFilter={handleFilter} />
        </div>
        <div className="search-and-display flex-fill">
          <Contact filteredArray={filteredArray} handleDelete={handleDelete}/>
        </div>
      </div>
    </>
  );
};

export default App;
