import React from 'react'

const Dots = ({ count }) => {
  return (
    <div className='dots'>
        {Array.from({ length: count }).map((_,index) => (
            <div key={index} className='dot'></div>
        ))}
    </div>
  )
}

export default Dots