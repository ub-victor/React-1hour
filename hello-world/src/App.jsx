import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Message from './components/Message'

function App() {

  return (
    <>
      <Message name = "Victoire" heroName= "batman">
        <p>This is children props</p>
      </Message>
      <Greet name = "Ushindi" heroName= "ironman">
        <button>Action</button>
      </Greet>
    </>
  )
}

export default App
