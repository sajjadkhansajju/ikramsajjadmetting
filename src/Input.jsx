import React, { useState } from 'react';

const Input = () => {
  const [name, setName] = useState('ali'); 
  const [data, setData] = useState([])
   const [error, setEror] = useState(false);


  const handleInput = () => {
  if (!name){
    setEror(true)
  }else{
    setEror(false)
    setData([...data, name])
    setName('')
  }
n
  setTimeout(() =>{
     setEror(false)
  },3000
);


  };

  return (
    <>
    <div className="container mx-auto w-1/2 p-10 shadow-lg rounded-md">
      <form>
        <label htmlFor="name" className="block text-gray-500 mb-2">
          Name
        </label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full p-2 rounded-md border border-gray-200"
          placeholder="Enter your name"
        />
        {
          error && <p className='text-red-500 font-semibold'>
            please entr the name
          </p>
        }
        <button onClick={handleInput} type="button" className="w-full bg-green-500 mt-2 hover:bg-green-600 active:scale-95 rounded-md p-2 text-white cursor-pointer"
        >
          Add Data
        </button>
      </form>
    </div>
    </>
  );
};

export default Input;
