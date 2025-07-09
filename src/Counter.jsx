import React, { useState } from 'react'

const Counter = () => {
const [count,setcount]= useState (0);
const Decreasement=()=>{
    setCount(count - 1);
}
  }
  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className='text-9xl'>{count}</h1>
        <button onClick={Decreasement} className='text-white cursor-pointer mx-2 rounded-md active:scale-95 px-5 py-2 bg-red-500 hover:bg-red-600 '>
            Decrease
            </button>
        <button className='text-white cursor-pointer mx-2 rounded-md active:scale-95 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 '>
            Reset
            </button>
        <button className='text-white cursor-pointer mx-2 rounded-md active:scale-95 px-5 py-2 bg-green-500 hover:bg-green-600 '>
            increase
            </button>

      </div>
    </>
  )
}

export default Counter
