import React, { useState } from 'react'

export const Calculator = () => {
  const [count, setCount] = useState(0)
  
  const handleClickIncrement = () => {
    setCount(count + 1)
  }
  const handleClickDecrement = () => {
    setCount(count - 1)
  }
  return (
    <div>
        <button onClick={handleClickDecrement}>-</button>
        <p>Count: {count}</p>
        <button onClick={handleClickIncrement}>+</button>
    </div>
  )
}
