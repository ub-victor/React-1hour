import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <Person
       name={'Ushindi'}
       ln={'victoire'} 
       age={30}/>
      <Person/>
      
    </div>
  )
}

export default App