import React from 'react'
export const Home = () => {
  const handleClick = () => {
    alert('Button clicked!');
  }; 
  return (
    <>
      <h3 className='homeHeader'>Home Page</h3>
      <button onClick={handleClick}>
        Click me
      </button>
    </>
    
  )
}
