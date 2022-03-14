import { ICharacter, ResultsEntity } from '../types'

export default function characterNames(characters: ResultsEntity[]) {
  if (characters) {
    const characterNames = characters.map((character) => {
      return character.name
    })
    return characterNames
  }
}
