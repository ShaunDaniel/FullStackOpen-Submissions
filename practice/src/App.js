import { useState } from 'react'

const App = () => {
  const [counter, SetCount] = useState(0)
  
  const Display = ({counter}) =>{
    return(
      <h1>{counter}</h1>
    )
  }

  const Button = ({text,handleClick}) =>{
    return(
      <div>
      <button onClick={handleClick}>{text}</button>
      <br />
      </div>
    )
    
  }


  const IncrementNumber = () => SetCount(counter+1)
  const DecrementNumber = () => SetCount(counter-1)
  const ResetNumber = () => SetCount(0)


  return (
    <>
    <Display counter={counter}/>
    <Button text = "+" handleClick = {IncrementNumber} />
    <Button text = "Reset" handleClick = {ResetNumber} />
    <Button text = "-" handleClick = {DecrementNumber} />
    </>
  )
}

export default App