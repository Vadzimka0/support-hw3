import {UserType} from "../HW8";

type SetPeopleActionType = {
  type: 'sort' | 'check'
  payload: 'up' | 'down' | number
}

export const homeWorkReducer = (state: Array<UserType>, action: SetPeopleActionType): Array<UserType> => { // need to fix any
  switch (action.type) {
    case 'sort': {
      let copyState;
      (action.payload === 'up')
        ? copyState = [...state].sort((a, b) => a.name > b.name ? 1 : -1)
        : copyState = [...state].sort((a, b) => a.name < b.name ? 1 : -1);
      return copyState
    }
    case 'check': {
      return state.filter(p => p.age >= action.payload)
    }
    default:
      return state
  }
}