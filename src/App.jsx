import React from 'react'
import './globals.css'
import Counter from './Counter'
import Input from './Input'
import Color from './colorchanger/Color'
import { FaClipboard } from 'react-icons/fa';

import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Input /> */}
      <Color />
      <Toaster/>
     
    </div>
  )
}

export default App
