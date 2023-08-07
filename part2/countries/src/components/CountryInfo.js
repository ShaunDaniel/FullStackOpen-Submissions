import { useState,useEffect } from "react"
import axios from "axios"

const CountryInfo = (props) => {

    const [countryData,setCountryData] = useState({})

    useEffect(()=>{
       axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${props.filteredCountries.toLowerCase()}`).then((res) => {
        console.log("API response:", res.data); 
       setCountryData(res.data)
        console.log(res.data)
        }).catch((err) => {
        console.log(err.data)
       });
    },[])


    return (
        <>
          {countryData.name ? (
            <>
              <h1>{countryData.name.common}</h1>
              <p>
                <b>Capital:</b> {countryData.capital}
                <br />
                <b>Area:</b> {countryData.area}
                <br />
                <br />
                <b>Languages:</b>
                
              </p>
              <ul>
                    {Object.values(countryData.languages).map((language)=>(
                        <li>{language}</li>
                    ))}
                </ul>

                <img src={countryData.flags.png} alt="" />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </>
      );
}

export default CountryInfo