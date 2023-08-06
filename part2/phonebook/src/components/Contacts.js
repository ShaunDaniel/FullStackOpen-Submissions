const Contact = (props) => {
    return(
        <>
        <div className="m-4">
            <div className="my-3">
            <h2>Directory📖</h2>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr key="contact_header">
                    <th key="cname" scope="col">Contact Name</th>
                    <th key="cnum" scope="col">Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                {props.filteredArray.map((person)=>
                    <tr key={"contact_"+person.id}>
                        <td key={person.id}>{person.name}</td>
                        <td key={`num_`+person.id}>{person.number}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            {/* <ul className="list-group list-group">
                <li className="list-group-item active" aria-current="true">Contact</li>
                {props.filteredArray.map((person)=><li className="list-group-item" key={person.id}>{person.name}</li>)}
            </ul> */}
            
        </div>
        </>
    )
}

export default Contact