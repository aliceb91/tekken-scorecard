import './App.css'
import { CharacterArea } from './components/CharacterArea/CharacterArea.tsx'
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter.tsx'
import {useState} from "react";

function App() {

  const [counter, setCounter] = useState(
    localStorage.getItem('counter') ?
      Number(localStorage.getItem('counter')) :
      35
  )

  return (
    <>
      <CharacterCounter
        counter={counter}
      />
      <CharacterArea
        counter={counter}
        setCounter={setCounter}
      />
    </>
  )
}

export default App
