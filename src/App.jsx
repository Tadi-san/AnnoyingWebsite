import { useState } from 'react'
import './App.css'
import { PopUp } from './popUp'
import Level1 from './Level1'
import Level2 from './Level2'
import Level3 from './Level3'
import Level4 from './Level4'
import Space from './space'
function App() {

  return (
    <div >
      <PopUp />
      
      <Level1 />
      <Space />
      <Level2 />
      <Space />
      <Level3 />
      <Space /> 
      <Level4 />
      <Space />

    </div>
  )
}

export default App
