import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export enum ActionType {
  SetRepositories
}

export interface State {
  repositories: string[]
}

export interface Action {
  type: ActionType
  [key: string]: any
}

const initialState: State = {
  repositories: []
}

// *TODO: write types for actions | Created at: 05.Oct.2019
const reducer = (state = initialState, action: Action) => {
  const ACTIONS_MAP = {
    [ActionType.SetRepositories]: { ...state, repositories: action.repositories },
  }

  if (ACTIONS_MAP.hasOwnProperty(action.type)) return ACTIONS_MAP[action.type]
  else return state
}

export const makeStore = (initialState: State) => {
  return createStore(reducer, initialState, applyMiddleware(thunk))
}
