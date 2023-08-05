const Contact = (props) => {
    return(
        <>
            <h2>Numbers</h2>
            <ul>
                {props.filteredArray.map((person)=><li key={person.id}><b>{person.name}</b> - {person.number}</li>)}
            </ul>
        </>
    )
}

export default Contact