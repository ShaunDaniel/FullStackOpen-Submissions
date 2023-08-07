import { useEffect, useState } from "react";
import axios from "axios"
import CountryInfo from "./components/CountryInfo.js";
import CountryList from "./components/CountryList.js";

function App() {

  const [country, setCountry] = useState("");
  const [countryData,setCountryData] = useState([""])
  const [filtered,setFiltered] = useState(false)

  useEffect(()=>{
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all").then((res)=>{
      const names = res.data.map((country)=>country.name.common) 
      setCountryData(names)
    })
  },[])


  const filteredCountries = filtered ? countryData.filter((country_single)=>country_single.toUpperCase().includes(country.toUpperCase())) : countryData
  

  const inputHandler = (e) => {
    e.target.value === "" ? setFiltered(false) : setFiltered(true)
    setCountry(e.target.value);
  };


  return (
    <div className="App">
      <form>
        <label htmlFor="countrySearch">Find Country:</label>
        <input
          
          name="countrySearch"
          onChange={inputHandler}
          value={country}
        />
      </form>

      {filteredCountries.length===1 ? <CountryInfo filteredCountries={filteredCountries[0]}/> : < CountryList filteredCountries={filteredCountries} filtered={filtered}/>}
      

    </div>
  );
}

export default App;
