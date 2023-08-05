const AddContact = (props) => {
    return(
        <form onSubmit={props.addPerson}>
        <h3>Add Contact</h3>
        <div>
          Name: <input value={props.newName.name} onChange={props.handleName}/>
          <br />
          <br />
          Phone: <input value={props.newName.number} onChange={props.handleNumber}/>

        </div>
        <div>
          
          <button type="submit">Add Contact</button>
        </div>
        <br />
      </form>
    )
}

export default AddContact