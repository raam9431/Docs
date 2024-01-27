import React from 'react'
import Backgrounds from './components/Backgrounds'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='fixed w-full h-screen z-[2]'>

      <div className='relative w-full h-screen bg-zinc-800'>

        <Backgrounds />
        <Foreground />
      </div>
    </div>
  )
}

export default App;
