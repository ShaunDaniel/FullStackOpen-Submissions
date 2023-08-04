import React, { useState } from "react";
const App = () => {
  
  const [clicks, handleClick] = useState({
    left:0,
    right:0
  })

  const handleLeft = (clicks) =>{
    handleClick({
      left:clicks.left+1,
      ...clicks

    })
  }

  const handleRight = (clicks) =>{
    handleClick({
      ...clicks,
      right:clicks.right+1
    })
  }

  return (
    <div>
      {clicks.left}
      <button onClick={()=>handleLeft(clicks)}>
        left
      </button>
      <button onClick={()=>handleRight(clicks)}>
        right
      </button>
      {clicks.right}
    </div>
  )
}

export default App