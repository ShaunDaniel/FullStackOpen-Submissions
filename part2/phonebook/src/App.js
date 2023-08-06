import { useEffect, useState } from "react";
import AddContact from "./components/AddContact.js";
import Search from "./components/Search.js";
import Contact from "./components/Contacts.js";
import axios from "axios";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/persons").then((res) => {
      setPersons(res.data);
    });
  }, []);

  const [newName, setNewName] = useState({ name: "", number: "" });
  const [filtered, setFiltered] = useState(false);
  const [filter_query, setFilterQuery] = useState("");

  const filteredArray = filtered
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter_query.toLowerCase())
      )
    : persons;

  const handleNumber = (e) => {
    setNewName({ ...newName, number: e.target.value });
  };

  const handleFilter = (e) => {
    setFilterQuery(e.target.value);
    e.target.value = "" ? setFiltered(false) : setFiltered(true);
  };

  const handleName = (e) => {
    setNewName({ ...newName, name: e.target.value });
  };

  const addPerson = (e) => {
    e.preventDefault();
    var dupliCheck = persons.some(
      (person) => person.name.toUpperCase() === newName.name.toUpperCase()
    );
    var contCheck = persons.some((person) => person.number === newName.number);
    if (dupliCheck) {
      alert(`Cannot add ${newName.name}! Name already exists!`);
    } else if (contCheck) {
      alert(
        `Cannot add the number - ${newName.number}! Number already exists!`
      );
    } else {
      axios.post("http://localhost:3002/persons",newName).then((res)=>{
        console.log(res)
        setPersons([...persons,newName])
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
          <AddContact
            addPerson={addPerson}
            newName={newName}
            handleName={handleName}
            handleNumber={handleNumber}
          />
          <Search filter_query={filter_query} handleFilter={handleFilter} />
        </div>
        <div className="search-and-display flex-fill">
          <Contact filteredArray={filteredArray} />
        </div>
      </div>
    </>
  );
};

export default App;
