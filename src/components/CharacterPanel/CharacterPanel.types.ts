import {Dispatch, SetStateAction} from "react";

export type CharacterPanelProps = {
  characterName: string,
  counter: number,
  setCounter: Dispatch<SetStateAction<number>>
}