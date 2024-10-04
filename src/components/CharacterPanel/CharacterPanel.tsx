import type { CharacterPanelProps } from './CharacterPanel.types.ts'
import { CharacterFrame } from './CharacterPanel.styles.ts'
import {useEffect, useState} from "react";

export const CharacterPanel = ({characterName, counter, setCounter}: CharacterPanelProps) => {

  const [complete, setComplete] = useState(localStorage.getItem(
    `${characterName}Clicked`) === "true"
  );

  useEffect(() => {
    localStorage.setItem(`${characterName}Clicked`, complete.toString())
    localStorage.setItem('counter', counter.toString())
  }, [characterName, complete, counter])

  const handleClick = () => {
    if (!complete) {
      setComplete(true)
      setCounter(counter -= 1)
    } else {
      setComplete(false)
      setCounter(counter += 1)
    }
  }


  return (
    <CharacterFrame
      characterName={characterName}
      onClick={handleClick}
      clicked={complete}
    />
  )
}