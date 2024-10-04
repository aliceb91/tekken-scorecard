import { RemainingCharacters } from './CharacterCounter.styles.ts'
import type { CharacterCounterProps } from "./CharacterCounter.types.ts";

export const CharacterCounter = ({counter}: CharacterCounterProps) => {
  return (
    <RemainingCharacters>
      Characters Remaining: {counter}
    </RemainingCharacters>
  )
}