import { CharacterPanel } from '../CharacterPanel/CharacterPanel.tsx'
import { CharacterAreaContainer } from './CharacterArea.styles.ts'
import {CharacterAreaProps} from "./CharacterArea.types.ts";

export const CharacterArea = ({counter, setCounter}: CharacterAreaProps) => {

  const characters: Array<string> = [
    "alisa",
    "asuka",
    "azucena",
    "bryan",
    "claudio",
    "devilJin",
    "dragunov",
    "eddy",
    "feng",
    "heihachi",
    "hwoarang",
    "jack8",
    "jin",
    "jun",
    "kazuya",
    "king",
    "kuma",
    "lars",
    "law",
    "lee",
    "leo",
    "leroy",
    "lidia",
    "lili",
    "nina",
    "panda",
    "paul",
    "raven",
    "reina",
    "shaheen",
    "steve",
    "victor",
    "xiaoyu",
    "yoshimitsu",
    "zafina"
  ]

  return (
    <CharacterAreaContainer>
      {
        characters.map(character => {
          return <CharacterPanel
            characterName={character}
            counter={counter}
            setCounter={setCounter}
          />
        })
      }
    </CharacterAreaContainer>
  )
}