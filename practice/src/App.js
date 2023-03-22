import { useState } from 'react'

const App = () => {
  const [clicks, SetCount] = useState({left:0,right:0})
  
  const [allclicks, setAll] = useState([])

  const[totalclicks,setTotal] = useState(0)

  const Button = ({text,handleClick}) =>{
    return(
      <div>
      <button onClick={handleClick}>{text}</button>
      <br />
      </div>
    )
    
  }

  

  const LeftClick = () => {
    const updatedleft = clicks.left + 1
    SetCount({...clicks,left: updatedleft})
    setAll(allclicks.concat("L"))
    setTotal(updatedleft+clicks.right)
  }
  const RightClick = () => {
    const updatedright = clicks.right + 1
    SetCount({...clicks,left: clicks.left + 1})
    setAll(allclicks.concat("R"))
    setTotal(clicks.left+updatedright)

  }

console.log(allclicks)
  return (
    <>
    <div>
      <h1>Right : {clicks.right}</h1>
      <h1>Left : {clicks.left}</h1>
      <h1>Recent Clicks: {allclicks.join(" ")}</h1>
      <h1>Total Clicks: {totalclicks}</h1>

    </div>
    <Button text = "Right" handleClick = {RightClick} />
    <Button text = "Left" handleClick = {LeftClick} />
    
    </>
  )
}

export default App


// Add total click count
// Show all click using LRRL