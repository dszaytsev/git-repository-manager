import { createStore } from 'redux'
import { Repo } from '../components/RepositorySelector'


export enum ActionType {
  GetRepositories
}

export interface State {
  repositories: Repo[]
}

export interface Action {
  type: ActionType
  [key: string]: any
}

const reducer = (state = {}, action: Action) => {
  const ACTIONS_MAP = {
    [ActionType.GetRepositories]: { ...state, repositories: action.repositories }
  }

  if (ACTIONS_MAP.hasOwnProperty(action.type)) return ACTIONS_MAP[action.type]
  else return state
}

export const makeStore = (initialState: any, _options: any) => {
  return createStore(reducer, initialState)
}
