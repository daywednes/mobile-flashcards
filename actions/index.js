import { getDecks } from '../utils/api'

export const GET_ALL_DECK = 'GET_ALL_DECK'
export const CREATE_NEW_DECK = 'CREATE_NEW_DECK'

export const fetchAllDeck = () => dispatch => {
  getDecks().then(res => {
    const deckList = JSON.parse(res)
    if (deckList !== null) {
      dispatch(getAllDeck(deckList))
    }
  })
}

export const getAllDeck = deckList => ({ type: GET_ALL_DECK, deckList })
export const createNewDeck = deck => ({ type: CREATE_NEW_DECK, deck })

// export function getAllDeck(deckList) {
//   return {
//     type: GET_ALL_DECK,
//     deckList
//   }
// }

// export function createNewDeck(deck) {
//   return {
//     type: CREATE_NEW_DECK,
//     deck
//   }
// }
