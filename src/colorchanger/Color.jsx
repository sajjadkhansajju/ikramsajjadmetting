import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import Values from 'values.js'
import SingleColor from '../SingleColor';

const Color = () => {

    const [input, setInput] = useState('')
    const [list, setList] = useState([])
    const handleColor = () => {
  if (!input) {
    toast.error('Please enter a color value');
  }else {
    try{
      const color = new Values(input).all(10)
      setList(color)
      
       }catch (error){
      console.log(error)
    toast.error('Invilid Color Value')
   }
  }
}

  return (



    <>
    <div className="container shadow p-10 w-1/2 mx-auto py-5">
    <form>
      <label htmlFor="color" className="text-gry-500">
      Color Name
      </label>
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='E.G.pink' className="w-full border border-gray-200 p-2 outline-0 focus:border-pink-500 rounded-md shadow" />
      <button  type='button' onClick={handleColor} className="w-full bg-blue-500 rounded-md shadow p-2 my-3">Genrate Color</button>
    </form>
    </div>
     <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 p-4">
        {list.map((item, index) => {
          return (
            <SingleColor
              key={index}
              {...item}
              index={index}
              hexColor={item.hex}
            />
          );
        })}
      </div>
    </>
  )
}

export default Color
