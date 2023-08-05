const Search = (props) => {
    return(
    <>
        <h3>Search</h3>
        <input type="text" value={props.filter_query} onChange={props.handleFilter}/>
    </>    )
}

export default Search