import { createStore, applyMiddleware } from 'redux'
import { Repo } from '../components/RepositorySelector'
import { File } from '../components/Files'
import thunk from 'redux-thunk'

export enum ActionType {
  SetRepositories,
  SetRepositoriesContent
}

export interface RepositoryContent {
  files?: File
}

export interface Repository {
  [key: string]: {
    paths?: {
      [key: string]: File[]
    }
  }
}

export interface State {
  repositoryList: Repo[]
  repositoriesContent: Repository
}

export interface Action {
  type: ActionType
  [key: string]: any
}

const initialState: State = {
  repositoryList: [],
  repositoriesContent: {}
}

// // *TODO: write types for actions | Created at: 05.Oct.2019
const reducer = (state = initialState, action: Action) => {
  const ACTIONS_MAP = {
    [ActionType.SetRepositories]: { ...state, repositoryList: action.repositoryList },

    [ActionType.SetRepositoriesContent]: { ...state,
      repositoriesContent: { ...state.repositoriesContent,
        [action.id]: {
          paths: {
            [action.path]: action.files
          }
        }
      }
    }
  }

  if (ACTIONS_MAP.hasOwnProperty(action.type)) return ACTIONS_MAP[action.type]
  else return state
}

export const makeStore = (initialState: any, _options: any) => {
  return createStore(reducer, initialState, applyMiddleware(thunk))
}
