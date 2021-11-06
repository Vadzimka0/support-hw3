import {UserType} from "../HW8";

type SetPeopleActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: SetPeopleActionType): Array<UserType> => { // need to fix any
  switch (action.type) {
    case 'sort': {
      const copyState = [...state].sort( (a,b) => {
        if (a.name > b.name) {return 1;}
        if (a.name < b.name) {return -1;}
        return 0;
      })
      return action.payload === 'up' ? copyState : copyState.reverse()
    }
    case 'check': {
      return state.filter(p => p.age >= action.payload)
    }
    default:
      return state
  }
}