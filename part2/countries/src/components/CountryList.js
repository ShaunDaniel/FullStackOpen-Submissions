const CountryList = (props) => {
    return(
        <ul>
        {props.filteredCountries.length>10 && props.filtered ? <li>Too many results!</li> : props.filteredCountries.map((country,index)=>
        <li key={index}>{country}</li>)}
      </ul>
    )
}

export default CountryList