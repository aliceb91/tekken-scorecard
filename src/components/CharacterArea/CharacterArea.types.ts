import {Dispatch, SetStateAction} from "react";

export type CharacterAreaProps = {
  counter: number,
  setCounter: Dispatch<SetStateAction<number>>
}